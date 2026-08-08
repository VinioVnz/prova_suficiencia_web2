import { NextResponse } from "next/server";
import { verificarCredenciais } from "@/service/userService";
import { generateToken } from "@/lib/jwt-auth";

export async function POST(request: Request) {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
        return NextResponse.json({ error: "Username e senha são obrigatórios." }, { status: 400 });
    }

    const usuario = await verificarCredenciais(username, password);

    if (!usuario) {
        return NextResponse.json({ error: "Credenciais inválidas." }, { status: 401 });
    }

    const token = generateToken({
        userId: usuario.id,
        username: usuario.username,
    });

    const { password: _senha, ...usuarioSemSenha } = usuario;

    return NextResponse.json(
        { success: true, usuario: usuarioSemSenha, token: token },
        { status: 200 }
    );
}
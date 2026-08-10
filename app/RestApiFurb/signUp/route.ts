/**
 * @swagger
 * /RestApiFurb/signUp:
 *   post:
 *     tags:
 *       - Autenticação
 *     summary: Cadastra um novo usuário e retorna um token JWT
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput'
 *     responses:
 *       '201':
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       '400':
 *         description: Campos obrigatórios faltando
 *       '409':
 *         description: Username já está em uso
 *       '500':
 *         description: Erro interno ao criar usuário
 */
import { NextResponse } from "next/server";
import { criarUsuario } from "@/service/userService";
import { generateToken } from "@/lib/jwt-auth";

export async function POST(request: Request) {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
        return NextResponse.json({ error: "Username e senha são obrigatórios." }, { status: 400 });
    }

    try {
        const usuario = await criarUsuario({ username, password });

        const { password: _senha, ...usuarioSemSenha } = usuario;

        const token = generateToken({
            userId: usuario.id,
            username: usuario.username,
        });

        return NextResponse.json(
            { success: true, usuario: usuarioSemSenha, token },
            { status: 201 }
        );
    } catch (err: any) {
        if (err?.code === "P2002") {
            return NextResponse.json({ error: "Esse username já está em uso." }, { status: 409 });
        }

        return NextResponse.json({ error: "Erro ao criar usuário." }, { status: 500 });
    }
}
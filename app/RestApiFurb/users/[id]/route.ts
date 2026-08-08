import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "@/lib/jwt-auth";
import { atualizarUsuario, buscarUsuarioporId, deletarUsuario } from "@/service/userService";

export const GET = withAuth(async (request, { params }) => {
    const { id } = await params;
    const user = await buscarUsuarioporId(Number(id));

    if (!user) {
        return NextResponse.json({ message: "Usuário não encontrado" }, { status: 404 });
    }

    const { password, ...userSemSenha } = user;
    return NextResponse.json(userSemSenha, { status: 200 });
});

export const PUT = withAuth(async (request, { params }) => {
    const { id } = await params;
    const body = await request.json();
    const userAtualizado = await atualizarUsuario(Number(id), body);
    if (!userAtualizado) {
        return NextResponse.json({ message: "Usuário não encontrado" }, { status: 404 });
    }
    const { password, ...userSemSenha } = userAtualizado;
    return NextResponse.json({ success: true, usuario: userSemSenha }, { status: 200 });
}); 

export const DELETE = withAuth(async (request, { params }) => {
    const { id } = await params;
    const userDeletado = await deletarUsuario(Number(id));
    if (!userDeletado) {
        return NextResponse.json({ message: "Usuário não encontrado" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Usuário removido" }, { status: 200 });
});
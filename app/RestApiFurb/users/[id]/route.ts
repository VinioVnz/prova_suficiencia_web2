/**
 * @swagger
 * /RestApiFurb/users/{id}:
 *   get:
 *     tags:
 *       - Usuarios
 *     summary: Busca um usuário por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Usuário encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '404':
 *         description: Usuário não encontrado
 *   put:
 *     tags:
 *       - Usuarios
 *     summary: Atualiza um usuário existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput'
 *     responses:
 *       '200':
 *         description: Usuário atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 usuario:
 *                   $ref: '#/components/schemas/User'
 *       '404':
 *         description: Usuário não encontrado
 *   delete:
 *     tags:
 *       - Usuarios
 *     summary: Remove um usuário
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Usuário removido com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       '404':
 *         description: Usuário não encontrado
 */
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
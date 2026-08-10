/**
 * @swagger
 * /RestApiFurb/users:
 *   get:
 *     tags:
 *       - Usuarios
 *     summary: Lista todos os usuários
 *     responses:
 *       '200':
 *         description: Lista de usuários retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       '404':
 *         description: Usuários não encontrados
 */
/**
 * @swagger
 * /RestApiFurb/users:
 *   get:
 *     tags:
 *       - Usuarios
 *     summary: Lista todos os usuários
 *     responses:
 *       '200':
 *         description: Lista de usuários retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       '404':
 *         description: Usuários não encontrados
 */
import { listarUsuarios } from "@/service/userService";
import { NextResponse } from "next/dist/server/web/spec-extension/response";
import { withAuth } from "@/lib/jwt-auth";

export const GET = withAuth(async (request: Request) => {
    const users = await listarUsuarios();
    if(!users) {
        return NextResponse.json({ message: "Usuários não encontrados" }, { status: 404 });
    }
    return NextResponse.json(users, { status: 200 });
});

/**
 * @swagger
 * /RestApiFurb/equipamentos/{id}:
 *   get:
 *     tags:
 *       - Equipamentos
 *     summary: Busca equipamento por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Equipamento encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Equipamento'
 *       '404':
 *         description: Equipamento não encontrado
 *   put:
 *     tags:
 *       - Equipamentos
 *     summary: Atualiza um equipamento existente
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
 *             $ref: '#/components/schemas/EquipamentoInput'
 *     responses:
 *       '200':
 *         description: Equipamento atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 equipamento:
 *                   $ref: '#/components/schemas/Equipamento'
 *       '404':
 *         description: Equipamento não encontrado
 *   delete:
 *     tags:
 *       - Equipamentos
 *     summary: Remove um equipamento
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Equipamento removido com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 text:
 *                   type: string
 *       '404':
 *         description: Equipamento não encontrado
 */
import { NextResponse } from "next/server";
import { atualizarEquipamento, buscarEquipamentoPorId, removerEquipamento } from "@/service/equipamentoService";
import { withAuth } from "@/lib/jwt-auth";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const equipamento = await buscarEquipamentoPorId(Number(id));
    if(!equipamento) {
        return NextResponse.json({ message: "Equipamento não encontrado" }, { status: 404 });
    }
    return NextResponse.json(equipamento, { status: 200 });
}

export const PUT = withAuth(async (request, { params }) => {
    const { id } = await params;
    const body = await request.json();
    const equipamentoAtualizado = await atualizarEquipamento(Number(id), body);
 
    if (!equipamentoAtualizado)
        return NextResponse.json({ message: "Equipamento não encontrado" }, { status: 404 });
 
    return NextResponse.json({ success: true, equipamento: equipamentoAtualizado }, { status: 200 });
});
 
export const DELETE = withAuth(async (request, { params }) => {
    const { id } = await params;
    const equipamentoDeletado = await removerEquipamento(Number(id));
 
    if (!equipamentoDeletado)
        return NextResponse.json({ message: "Equipamento não encontrado" }, { status: 404 });
 
    return NextResponse.json({ success: true, text: "equipamento removido" }, { status: 200 });
});
/**
 * @swagger
 * /RestApiFurb/equipamentos:
 *   get:
 *     tags:
 *       - Equipamentos
 *     summary: Lista todos os equipamentos
 *     responses:
 *       '200':
 *         description: Lista de equipamentos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 equipamentos:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Equipamento'
 *   post:
 *     tags:
 *       - Equipamentos
 *     summary: Cria um novo equipamento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EquipamentoInput'
 *     responses:
 *       '201':
 *         description: Equipamento criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Equipamento'
 */
import { NextResponse } from "next/server";
import { listarEquipamentos, criarEquipamento } from "@/service/equipamentoService";

export async function GET() {
  const equipamentos = await listarEquipamentos();
  return NextResponse.json({ equipamentos }, { status: 200 });
}

export async function POST(request: Request) {
  const body = await request.json();
  const equipamento = await criarEquipamento(body);
  return NextResponse.json(equipamento, { status: 201 });
}
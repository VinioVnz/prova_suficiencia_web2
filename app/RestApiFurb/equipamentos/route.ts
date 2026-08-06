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
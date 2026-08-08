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
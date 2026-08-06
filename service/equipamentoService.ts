
import { prisma } from "@/lib/prisma";
import { Equipamento, Tipo } from "@/model/equipamentoModel";

export async function listarEquipamentos() {
  return prisma.equipamento.findMany({
    include: { tipo: true },
  });
}

export async function buscarEquipamentoPorId(id: number) {
  return prisma.equipamento.findUnique({
    where: { id },
    include: { tipo: true },
  });
}

export async function criarEquipamento(dados: Equipamento) {
  return prisma.equipamento.create({
    data: {
      nome: dados.nome,
      tipoId: dados.tipo.id,
    },
    include: { tipo: true },
  });
}

export async function atualizarEquipamento(id: number, dados: Partial<Equipamento>) {
  const existente = await prisma.equipamento.findUnique({ where: { id } });
  if (!existente) return null;

  return prisma.equipamento.update({
    where: { id },
    data: {
      nome: dados.nome ?? undefined,
      tipoId: dados.tipo?.id ?? undefined,
    },
    include: { tipo: true },
  });
}

export async function removerEquipamento(id: number) {
  const existente = await prisma.equipamento.findUnique({ where: { id } });
  if (!existente) return null;

  await prisma.equipamento.delete({ where: { id } });
  return true;
}
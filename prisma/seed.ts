import { PrismaClient } from "@prisma/client";
import "dotenv/config";

const prisma = new PrismaClient();
async function main() {
  await prisma.equipamento.deleteMany();
  await prisma.tipo.deleteMany();

  const tipos = await Promise.all([
    prisma.tipo.create({ data: { nome: "Computador" } }),   
    prisma.tipo.create({ data: { nome: "audiovisual" } }),
    prisma.tipo.create({ data: { nome: "Impressora" } })
  ]);

  const [computador, audiovisual] = tipos;

  await prisma.equipamento.createMany({
    data: [
      { nome: "Notebook Dell", tipoId: computador.id },        
      { nome: "Projetor Epson", tipoId: audiovisual.id },      
      { nome: "Notebook Lenovo", tipoId: computador.id }
    ],
  });

  console.log("Seed executado com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
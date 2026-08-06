import { PrismaClient } from "@prisma/client";
import "dotenv/config";

const prisma = new PrismaClient();
async function main() {
  await prisma.equipamento.deleteMany();
  await prisma.tipo.deleteMany();

  const tipos = await Promise.all([
    prisma.tipo.create({ data: { nome: "Computador" } }),   
    prisma.tipo.create({ data: { nome: "audiovisual" } }),  
    prisma.tipo.create({ data: { nome: "Impressora" } }),   
    prisma.tipo.create({ data: { nome: "Rede" } }),         
    prisma.tipo.create({ data: { nome: "Periférico" } }),   
  ]);

  const [computador, audiovisual, impressora, rede, periferico] = tipos;

  await prisma.equipamento.createMany({
    data: [
      { nome: "Notebook Dell", tipoId: computador.id },        
      { nome: "Projetor Epson", tipoId: audiovisual.id },      
      { nome: "Notebook Lenovo", tipoId: computador.id },     
      { nome: "Imp HP", tipoId: impressora.id },               
      { nome: "Caixa de Som JBL", tipoId: audiovisual.id },     
      { nome: "Impressora Epson EcoTank", tipoId: impressora.id },
      { nome: "Roteador TP-Link Archer", tipoId: rede.id },     
      { nome: "Switch Cisco 24 portas", tipoId: rede.id },      
      { nome: "Mouse Logitech MX", tipoId: periferico.id },     
      { nome: "Teclado Mecânico Redragon", tipoId: periferico.id },
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
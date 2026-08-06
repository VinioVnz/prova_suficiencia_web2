-- CreateTable
CREATE TABLE "tipos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "tipos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "equipamentos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipoId" INTEGER NOT NULL,

    CONSTRAINT "equipamentos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "equipamentos" ADD CONSTRAINT "equipamentos_tipoId_fkey" FOREIGN KEY ("tipoId") REFERENCES "tipos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

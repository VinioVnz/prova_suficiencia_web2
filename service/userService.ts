import { prisma } from "@/lib/prisma";
import { User } from "@/model/userModel";
import bcrypt from "bcryptjs";

const SALT_ROUNDS = 10;

export async function criarUsuario(dados: User) {
    const senhaHash = await bcrypt.hash(dados.password, SALT_ROUNDS);

    return prisma.user.create({
        data: {
            username: dados.username,
            password: senhaHash,
        },
    });
}


export async function buscarUsuarioporId(id: number) {
    return prisma.user.findUnique({
        where: { id },
    });
}

export async function listarUsuarios() {
    return prisma.user.findMany({
        select: { id: true, username: true },
    });
}

export async function atualizarUsuario(id: number, dados: Partial<User>) {
    const existente = await prisma.user.findUnique({ where: { id } });
    if (!existente) return null;

    const senhaHash = dados.password
        ? await bcrypt.hash(dados.password, SALT_ROUNDS)
        : undefined;

    return prisma.user.update({
        where: { id },
        data: {
            username: dados.username ?? undefined,
            password: senhaHash,
        },
    });
}

export async function deletarUsuario(id: number) {
    const existente = await prisma.user.findUnique({ where: { id } });
    if (!existente) return null;

    return prisma.user.delete({
        where: { id },
    });
}

export async function verificarCredenciais(username: string, password: string) {
    const usuario = await prisma.user.findUnique({ where: { username } });
    if (!usuario) return null;

    const senhaConfere = await bcrypt.compare(password, usuario.password);
    if (!senhaConfere) return null;

    return usuario;
}
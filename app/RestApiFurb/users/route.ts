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

import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
  console.warn('JWT_SECRET não esta no .env');
}

export interface AuthPayload {
  userId: number;
  username: string;
}

export class AuthError extends Error {
  status: number;
  constructor(message: string, status = 401) {
    super(message);
    this.status = status;
  }
}

export function getTokenFromRequest(req: NextRequest): string | null {
  const authHeader = req.headers.get('authorization') || req.headers.get('Authorization');
  if (authHeader) {
    return authHeader.trim();
  }
  const cookieToken = req.cookies.get('token')?.value;
  return cookieToken || null;
}

export function generateToken(
  payload: AuthPayload,
  expiresIn: jwt.SignOptions['expiresIn'] = '1d'
): string {
  const options: jwt.SignOptions = { expiresIn };
  return jwt.sign(payload, JWT_SECRET, options);
}

export function verifyAuth(req: NextRequest): AuthPayload {
  const token = getTokenFromRequest(req);
  if (!token) {
    throw new AuthError('Token não fornecido.', 401);
  }
 
  try {
    const payload = jwt.verify(token, JWT_SECRET) as AuthPayload;
    return payload;
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      throw new AuthError('Token expirado.', 401);
    }
    throw new AuthError('Token inválido.', 401);
  }
}

type RouteContext = { params: Promise<Record<string, string>> | Record<string, string> };
 
type AuthedHandler = (
  req: NextRequest,
  ctx: RouteContext,
  auth: AuthPayload
) => Promise<NextResponse> | NextResponse;

export function withAuth(handler: AuthedHandler) {
  return async (req: NextRequest, ctx: RouteContext) => {
    try {
      const auth = verifyAuth(req);
      return await handler(req, ctx, auth);
    } catch (err: any) {
      const status = err instanceof AuthError ? err.status : 500;
      const message = err instanceof AuthError ? err.message : 'Erro interno de autenticação.';
      return NextResponse.json({ error: message }, { status });
    }
  };
}
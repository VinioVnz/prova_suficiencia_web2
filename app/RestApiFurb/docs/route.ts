/**
 * @swagger
 * components:
 *   schemas:
 *     Tipo:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         nome:
 *           type: string
 *       required:
 *         - id
 *         - nome
 *     Equipamento:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         nome:
 *           type: string
 *         tipo:
 *           $ref: '#/components/schemas/Tipo'
 *       required:
 *         - id
 *         - nome
 *         - tipo
 *     EquipamentoInput:
 *       type: object
 *       properties:
 *         nome:
 *           type: string
 *         tipo:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *           required:
 *             - id
 *       required:
 *         - nome
 *         - tipo
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         username:
 *           type: string
 *       required:
 *         - id
 *         - username
 *     UserInput:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *         password:
 *           type: string
 *       required:
 *         - username
 *         - password
 *     AuthResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *         usuario:
 *           $ref: '#/components/schemas/User'
 *         token:
 *           type: string
 *       required:
 *         - success
 *         - usuario
 *         - token
 * tags:
 *   - name: Equipamentos
 *     description: Operações de equipamentos
 *   - name: Usuarios
 *     description: Operações de usuário
 *   - name: Autenticação
 *     description: Login e cadastro
 */
import { swaggerSpec } from '@/lib/swagger';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(swaggerSpec);
}
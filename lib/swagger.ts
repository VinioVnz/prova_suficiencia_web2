import swaggerJsdoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: { title: 'API Prova Suficiencia Web 2', version: '1.0.0' },
  },
  apis: ['./app/RestApiFurb/**/*.ts'], 
});
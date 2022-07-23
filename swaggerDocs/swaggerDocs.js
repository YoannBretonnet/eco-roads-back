import swagger from 'swagger-jsdoc';
const swaggerJSDoc = swagger;

// Avec destructuring
import { serve, setup } from 'swagger-ui-express';

// options et cssOptions 
const specs = swaggerJSDoc(options);



export { specs, serve, setup, cssOptions };
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'My Node.js API',
            description: 'Documentation for My Node.js API',
            version: '1.0.0',
        },
    },
    apis: ['./routes/*.js'], // Path to API routes
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;

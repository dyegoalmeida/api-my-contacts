/**
 * Para importamos pacotes que são nativos do node e do node_modules
 * só precisamos colocar o nome do pacote.
 */
const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('Hello world!');
});
app.listen(3000, () => console.log('🔥 Server started at htt://localhost:3000'));
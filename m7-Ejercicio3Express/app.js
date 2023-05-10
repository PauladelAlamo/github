const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => { 
 res.sendFile(__dirname + '/views/form.html');
});
app.post('/saludar', (req, res) => { 
 const { nombre } = req.body; 
 res.send(`Hola ${nombre}!`);
});
app.listen(3000, () => { 
 console.log('Servidor iniciado en http://localhost:3000');
});
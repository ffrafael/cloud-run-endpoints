const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const protocolosData = require('./protocolos.json');
const processosSeletivosData = require('./processos-seletivos.json');
const contasData = require('./contas.json');

// Endpoint 1: Buscar Protocolo
app.get('/buscar-protocolo/:id', (req, res) => {
    const protocoloId = req.params.id;
    // Lógica para buscar o protocolo
    const protocolo = protocolosData[protocoloId];
    if (protocolo) {
        res.json(protocolo);
    } else {
        res.status(404).json({ message: `O protocolo ${protocoloId} não foi encontrado` });
    }
});

// Endpoint 2: Buscar Conta
app.get('/buscar-conta/:id', (req, res) => {
    const contaId = req.params.id;
    // Lógica para buscar a conta
    const conta = contasData[contaId];
    if (conta) {
        res.json(conta);
    } else {
        res.status(404).json({ message: `A conta ${contaId} não foi encontrada` });
    }
});

// Endpoint 3: Buscar Processo Seletivo
app.get('/buscar-processo-seletivo', (req, res) => {
    // Lógica para listar processos seletivos
    if (processosSeletivosData) {
        res.json(processosSeletivosData);
    } else {
        res.status(404).json({ message: "Não existem processos seletivos abertos" });
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


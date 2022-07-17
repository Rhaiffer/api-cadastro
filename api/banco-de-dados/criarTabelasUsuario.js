const ModeloTabela = require('../usuario/modeloTabelaUsuario')

ModeloTabela
    .sync()
    .then(() => console.log('Tabela criada com sucesso'))
    .catch(console.log)
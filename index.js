const dotenv = require('dotenv');
const result = dotenv.config();
if (result.error) {
    throw result.error;
}

const App = require("./Api/app").server

const port = process.env.PORT || 3030;

App.get('/', function (req, res) {
    res.redirect('/api-docs');
});


App.listen(port, (err) => {
    if (err) console.log("Erro na configuração do servidor")
    console.log(`Aplicativo rodando na porta ${port}.`);
});

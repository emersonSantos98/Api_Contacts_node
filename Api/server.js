const App = require("./app").server


const port = 3030;


App.get('/', function (req, res) {
    res.redirect('/api-docs');
});


App.listen(port, (err) => {
    if (err) console.log("Erro na configuração do servidor")
    console.log(`Aplicativo rodando na porta ${port}.`);
})

const express = require("express"),
    app = express(),
    chalk = require('chalk'),
    figlet = require('figlet'),
    d_id = figlet.textSync("Biography")
    config = require("./includes/config"),
    PORT = process.env.PORT || 80;

app.set("view engine", "ejs");
app.use(express.static("public"))
    .use(express.json())
    .use(express.urlencoded({
        extended: true
    }));

// pagina principal
app.get("/", (req, res) => {
    res.render('index');
});

// Para Rotas ou Solicitações Inválidas
app.all("*", (req, res) => {
    return res.render("404", {
        title: config.title
    });
});

// Carrega e inicia o Servidor
app.listen(PORT, () => {
    console.log(chalk.magenta('[Online]: ') + chalk.green('Porta : [' + PORT + ']'))
    console.log(chalk.blue(d_id));
});
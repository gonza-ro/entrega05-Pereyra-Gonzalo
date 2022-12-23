/* Instanciar nuestras dependencias */
import express from "express"
import handlebars from "express-handlebars"

/* Declarar nuestras constantes */
const app = express()

let productos = []

// Establecemos la configuración de handlebars
app.engine(
    "hbs",
    handlebars.engine  ({
        extname: "*.hbs",
        defaultLayout: "index.hbs",
    })
);

app.set('view engine', "hbs");
app.set("views", "./views");

app.get("/formulario", (req, res) => {
    res.render("datos", {productos})
})

app.get('/tabla', (req, res) => {
    res.render('tabla', {productos});
});

app.post('/datos', (req, res) => {
    productos.push(req.body)
    console.log(productos)
    res.redirect('/tabla')
});


/* Configuración del servidor */

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log('Tu servidor esta funcionando en el puerto: ', PORT);
})
server.on('error', error => console.log('Error en el servidor', error));
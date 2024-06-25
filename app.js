const express = require("express");
const app = express();
const port = 3000;
app.get('http://localhost:3000/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Archivos estáticos desde la carpeta "public"
app.use(express.static("public"));

//JSON
app.use(express.json());

// Datos de productos
const products = [
    { id: 1, nombre: 'celular', precio: 1200000, disponible: true },
    { id: 2, nombre: 'camara', precio: 800000, disponible: false },
    { id: 3, nombre: 'audifonos', precio: 300000, disponible: true },
    { id: 4, nombre: 'cargador celular', precio: 90000, disponible: true },
    { id: 5, nombre: 'Computador Portatil', precio: 1800000, disponible: true }
];

// Ruta para consultar todos los productos
app.get("/products", (req, res) => {
    console.log('GET /products');
    res.json(products);
});

// Ruta para consultar un producto específico por ID
app.get("/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    console.log(`GET /products/${productId}`);
    const product = products.find(p => p.id === productId);
    
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Producto no encontrado');
    }
});

// Ruta para validar la disponibilidad de un producto por ID
app.get("/products/:id/disponibilidad", (req, res) => {
    const productId = parseInt(req.params.id);
    console.log(`GET /products/${productId}/disponibilidad`);
    const product = products.find(p => p.id === productId);
    
    if (product) {
        res.json({ disponible: product.disponible });
    } else {
        res.status(404).send('Producto no encontrado');
    }
});

// Ruta para validar el precio de un producto por ID
app.get("/products/:id/precio", (req, res) => {
    const productId = parseInt(req.params.id);
    console.log(`GET /products/${productId}/precio`);
    const product = products.find(p => p.id === productId);
    
    if (product) {
        res.json({ precio: product.precio });
    } else {
        res.status(404).send('Producto no encontrado');
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

//http://localhost:3000/products
//http://localhost:3000/products/1
//http://localhost:3000/products/1/disponibilidad
//http://localhost:3000/products/1/precio
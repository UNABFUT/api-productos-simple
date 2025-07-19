const express = require('express');
const app = express();
app.use(express.json());

let productos = [
  { id: 1, nombre: 'Laptop', precio: 850 },
  { id: 2, nombre: 'Mouse', precio: 25 }
];

// GET todos los productos
app.get('/productos', (req, res) => {
  res.json(productos);
});

// GET producto por ID
app.get('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find(p => p.id === id);
  producto ? res.json(producto) : res.status(404).send('No encontrado');
});

// POST nuevo producto
app.post('/productos', (req, res) => {
  const nuevo = { id: productos.length + 1, ...req.body };
  productos.push(nuevo);
  res.status(201).json(nuevo);
});

// PUT actualizar producto
app.put('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = productos.findIndex(p => p.id === id);
  if (index >= 0) {
    productos[index] = { id, ...req.body };
    res.json(productos[index]);
  } else {
    res.status(404).send('Producto no encontrado');
  }
});

// DELETE producto
app.delete('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  productos = productos.filter(p => p.id !== id);
  res.status(204).send();
});

app.listen(3000, () => console.log('API corriendo en http://localhost:3000'));

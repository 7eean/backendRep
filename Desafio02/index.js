const Contenedor = require("./contenedor");

const productos = new Contenedor("./productos.json");

productos.save({ title: "Testing product", price: 1 });

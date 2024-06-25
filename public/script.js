// scripts.js

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Hacer una solicitud GET a la API para obtener todos los productos
    axios.get('http://localhost:3000/products')
        .then(function(response) {
            // Manejar la respuesta de la API
            const productos = response.data;

            // Seleccionar el contenedor de productos
            const gridProductos = document.querySelector('.grid-productos');

            // Iterar sobre cada producto y crear el HTML correspondiente
            productos.forEach(function(producto) {
                const productoHTML = `
                    <div class="producto">
                        <img src="celularx.jfif" alt="${producto.nombre}">
                        <h2>${producto.nombre}</h2>
                        <p>Precio: $${producto.precio}</p>
                    </div>
                `;
                // Agregar el producto al contenedor
                gridProductos.innerHTML += productoHTML;
            });
        })
        .catch(function(error) {
            console.error('Error al obtener productos:', error);
        });
});

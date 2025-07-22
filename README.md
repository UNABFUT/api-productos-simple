# API Productos (Node.js + Express)

API REST básica para manejar productos de una tienda (GET, POST, PUT, DELETE).
 Integrantes:             Luis Valentín Gutiérrez Portillo      	    gp0125012020
                          Bryan Ernesto Romero Orellana              	ro0279012020
                          Jairo Vladimir Osorio Portillo              op1878012019
                          Andrea Abigail Roldán Martinez              rm2411012019
                         
Docente:  Ing. Jose Serrano


## 🚀 Instalación
```bash
npm install
```

## ▶️ Ejecución
```bash
npm start
```

La API se ejecuta en `http://localhost:3000`

## 🔧 Endpoints
- `GET /productos` - Lista todos los productos
- `GET /productos/:id` - Obtiene un producto por ID
- `POST /productos` - Crea un producto (requiere JSON: `{ nombre, precio }`)
- `PUT /productos/:id` - Actualiza un producto por ID
- `DELETE /productos/:id` - Elimina un producto por ID

## 📘 Ejemplo de producto
```json
{
  "nombre": "Teclado",
  "precio": 40
}
```

## 📌 Diagrama
(Agrega aquí una imagen del diagrama de flujo si lo deseas)

---

> Proyecto simple para fines educativos. Ideal para practicar con Express y APIs REST.

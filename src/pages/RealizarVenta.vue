<template>
  <label for="">Número Venta</label>
  <input type="text" v-model="numeroVenta">
  <label for="">Cédula</label>
  <input type="text" v-model="cedula">
  <button class="btn btn-success" @click="guardar">Guardar</button>
  <hr>
  <label for="">Código Barras</label>
  <input type="text" v-model="codigoBarras">
  <label for="">Cantidad</label>
  <input type="text" v-model="cantidad">
  <button class="btn btn-primary" @click="agregar">Agregar</button>
  <hr>
  <table class="table">
    <tr>
      <th>Código Barras</th>
      <th>Nombre</th>
      <th>Cantidad</th>
      <th>Precio</th>
      <th>Subtotal</th>
    </tr>
    <tr v-for="prod in productos" :key="prod">
      <td>{{ prod.codigoBarras }}</td>
      <td>{{ prod.nombre }}</td>
      <td>{{ prod.cantidad }}</td>
      <td>{{ prod.precio }}</td>
      <td>{{ prod.subtotal }}</td>
    </tr>
    <tr>
      <td class="text-end" colspan="4"><b>Total:</b></td>
      <td>{{ sumar() }}</td>
    </tr>
</table>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      numeroVenta: 0,
      cedula: '',
      codigoBarras: '',
      cantidad: 0,
      productos: [],
    }
  }, 
  methods: {
    async guardar() {
      const venta = {
        numeroVenta: this.numeroVenta,
        cedulaCliente: this. cedula,
      }
      axios.put("http://localhost:8090/API/Examen/V1/ventas", {
        data: {
          numeroVenta: this.numeroVenta,
          cedulaCliente: this. cedula,
        }
      })
    },
    async agregar() {
      const buscarProducto = await axios.get("http://localhost:8090/API/Examen/V1/productos/" + this.codigoBarras).then(r => r.data)
      
      let producto = {
        codigoBarras: buscarProducto.codigoBarras,
        nombre: buscarProducto.nombre,
        cantidad: this.cantidad,
        precio: buscarProducto.precio,
        subtotal: (this.cantidad * buscarProducto.precio)
      }
      this.productos.push(producto)
    },
    sumar() {
      let suma = 0
      this.productos.forEach(element => {
        suma = suma + element.subtotal
      });
      return suma
    }
  }
}
</script>

<style>

</style>
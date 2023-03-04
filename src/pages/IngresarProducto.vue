<template>
  <label for="">CódigoBarras</label>
  <input type="text" v-model="producto.codigoBarras">
  <br>
  <label for="">Nombre</label>
  <input type="text" v-model="producto.nombre">
  <br>
  <label for="">Categoría</label>
  <input type="text" v-model="producto.categoria">
  <br>
  <label for="">Stock</label>
  <input type="text" v-model="producto.stock">
  <br>
  <label for="">Precio Unitario</label>
  <input type="text" v-model="precio">
  <br>
  <button class="btn btn-success mt-5" @click="guardar">Guardar</button>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      producto: {
        codigoBarras: '',
        nombre: '',
        categoria: '',
        stock: 0,
        precio: 0.0,
      }
    }
  },
  methods: {
    async guardar(){
      axios.put("http://localhost:8090/API/Examen/V1/producto", {
        data: {
          producto: this.producto
        }
      })
    }
  }
}
</script>

<style>
label {
    margin-right: 30px;
}
</style>
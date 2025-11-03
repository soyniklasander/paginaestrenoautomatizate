<template>
  <div class="encabezado-seccion">
    <h2 class="titulo">{{ titulo }}</h2>
    <p v-if="subtitulo" class="subtitulo">{{ subtitulo }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EncabezadoSeccion',
  props: {
    titulo: {
      type: String,
      required: true
    },
    subtitulo: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped>
.encabezado-seccion {
  text-align: center;
  margin-bottom: 3rem;
}

.titulo {
  font-size: 2.5rem;
  color: var(--color-texto);
  margin-bottom: 1rem;
}

.subtitulo {
  font-size: 1.1rem;
  color: var(--color-texto);
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
}
</style>
<template>
  <div class="tarjeta" :class="{ 'con-hover': conHover }">
    <div v-if="icono" class="icono">{{ icono }}</div>
    <h3 v-if="titulo" class="titulo">{{ titulo }}</h3>
    <p v-if="descripcion" class="descripcion">{{ descripcion }}</p>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Tarjeta',
  props: {
    icono: {
      type: String,
      default: ''
    },
    titulo: {
      type: String,
      default: ''
    },
    descripcion: {
      type: String,
      default: ''
    },
    conHover: {
      type: Boolean,
      default: true
    }
  }
})
</script>

<style scoped>
.tarjeta {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.tarjeta.con-hover:hover {
  transform: translateY(-5px);
}

.icono {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.titulo {
  color: var(--color-texto);
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.descripcion {
  color: var(--color-texto);
  opacity: 0.8;
  line-height: 1.6;
}
</style>
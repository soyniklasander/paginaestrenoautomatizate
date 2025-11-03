<template>
  <button 
    class="boton" 
    :class="[`boton-${tipo}`, { 'boton-completo': completo }]"
    :type="tipoBoton"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Boton',
  props: {
    tipo: {
      type: String as PropType<'primario' | 'secundario' | 'contorno'>,
      default: 'primario',
      validator: (value: string) => {
        return ['primario', 'secundario', 'contorno'].includes(value)
      }
    },
    completo: {
      type: Boolean,
      default: false
    },
    tipoBoton: {
      type: String as PropType<'button' | 'submit' | 'reset'>,
      default: 'button'
    }
  }
})
</script>

<style scoped>
.boton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.boton-primario {
  background-color: var(--color-primario);
  color: white;
}

.boton-primario:hover {
  background-color: var(--color-secundario);
}

.boton-secundario {
  background-color: var(--color-secundario);
  color: white;
}

.boton-secundario:hover {
  opacity: 0.9;
}

.boton-contorno {
  background-color: transparent;
  border: 2px solid var(--color-primario);
  color: var(--color-primario);
}

.boton-contorno:hover {
  background-color: var(--color-primario);
  color: white;
}

.boton-completo {
  width: 100%;
}

.boton:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .boton {
    padding: 0.5rem 1rem;
  }
}
</style>
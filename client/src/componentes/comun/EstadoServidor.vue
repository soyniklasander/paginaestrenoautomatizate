<template>
  <div class="estado-servidor">
    Estado del servidor: {{ texto }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { obtenerSalud, type ModuloSalud } from '@/utilidades/api'

export default defineComponent({
  name: 'EstadoServidor',
  props: {
    modulo: { type: String as () => ModuloSalud, default: 'usuarios' }
  },
  setup(props) {
    const texto = ref<string>('comprobando…')
    onMounted(async () => {
      try {
        const r = await obtenerSalud(props.modulo)
        texto.value = r?.ok ? `activo (${r.modulo})` : 'no disponible'
      } catch {
        texto.value = 'no disponible'
      }
    })
    return { texto }
  }
})
</script>

<style scoped>
.estado-servidor {
  text-align: center;
  margin: 1rem 0;
  font-size: .95rem;
  opacity: .85;
}
</style>

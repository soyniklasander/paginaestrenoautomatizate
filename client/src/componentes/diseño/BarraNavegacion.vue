<template>
  <nav class="barra-navegacion">
    <div class="logo">
      <router-link to="/">Automatízate</router-link>
    </div>
    <div class="enlaces">
      <router-link to="/">Inicio</router-link>
      <router-link to="/nosotros">Nosotros</router-link>
      <router-link to="/servicios">Servicios</router-link>
      <router-link to="/contacto">Contacto</router-link>
    </div>
    <button class="boton-contacto">
      <router-link to="/contacto">¡Empecemos!</router-link>
    </button>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BarraNavegacion'
})
</script>

<style scoped>
.barra-navegacion {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.logo a {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primario);
  text-decoration: none;
}

.enlaces {
  display: flex;
  gap: 2rem;
}

.enlaces a {
  text-decoration: none;
  color: var(--color-texto);
  font-weight: 500;
  transition: color 0.3s ease;
}

.enlaces a:hover {
  color: var(--color-primario);
}

.enlaces a.router-link-active {
  color: var(--color-primario);
}

.boton-contacto {
  background-color: var(--color-primario);
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.boton-contacto:hover {
  background-color: var(--color-secundario);
}

.boton-contacto a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

@media (max-width: 768px) {
  .enlaces {
    display: none;
  }
  
  .boton-contacto {
    display: none;
  }
}
</style>
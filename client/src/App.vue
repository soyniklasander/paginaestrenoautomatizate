<template>
  <div id="app">
    <BarraNavegacion />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraNavegacion from './componentes/diseño/BarraNavegacion.vue';

export default defineComponent({
  name: 'App',
  components: {
    BarraNavegacion
  }
});
</script>

<style>
:root {
  --color-primario: #2563eb;
  --color-secundario: #1e40af;
  --color-texto: #1f2937;
  --color-fondo-claro: #f8fafc;
  --color-acento: #f59e0b;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
  background-color: var(--background-light);
}

main {
  padding-top: 4rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

h1, h2, h3, h4, h5, h6 {
  color: var(--text-color);
  line-height: 1.2;
}

.section {
  padding: 5rem 0;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background-color: var(--secondary-color);
}

.btn-outline {
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.btn-outline:hover {
  background-color: var(--primary-color);
  color: white;
}

.card {
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .section {
    padding: 3rem 0;
  }
}
</style>
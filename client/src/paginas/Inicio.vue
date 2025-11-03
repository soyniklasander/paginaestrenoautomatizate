<template>
  <div class="inicio">
    <!-- Sección Hero -->
    <section class="hero">
      <div class="contenedor hero-contenido">
        <h1>TRANSFORMA TU NEGOCIO</h1>
        <p class="hero-subtitulo">¡Encuentra el verdadero potencial de tu empresa y maximiza tus oportunidades!</p>
        <div class="hero-botones">
          <a href="#servicios" class="boton boton-primario">Descubre Más</a>
          <a href="#contacto" class="boton boton-contorno">Contáctanos</a>
        </div>
      </div>
    </section>

    <!-- Sección Por Qué Elegirnos -->
    <section class="seccion por-que-nosotros">
      <div class="contenedor">
        <h2 class="titulo-seccion">¿Por qué las marcas nos eligen?</h2>
        <div class="caracteristicas-grid">
          <div class="tarjeta-caracteristica">
            <div class="icono-caracteristica">👥</div>
            <h3>Especialistas de primer nivel</h3>
            <p>Desde soluciones vanguardistas hasta estrategias disruptivas, reunimos a los profesionales más destacados en su campo.</p>
          </div>
          <div class="tarjeta-caracteristica">
            <div class="icono-caracteristica">💎</div>
            <h3>100% transparencia</h3>
            <p>Optimizamos y economizamos tu proceso de transformación con asesorías personalizadas.</p>
          </div>
          <div class="tarjeta-caracteristica">
            <div class="icono-caracteristica">🌎</div>
            <h3>Llegamos a todos lados</h3>
            <p>Con nuestro equipo multidisciplinario conseguimos el alcance perfecto para tu empresa.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección Servicios -->
    <section id="servicios" class="seccion servicios">
      <div class="contenedor">
        <h2 class="titulo-seccion">Nuestras líneas de negocio</h2>
        <div class="servicios-grid">
          <div class="tarjeta-servicio">
            <h3>Descubre tu marca</h3>
            <p>Hacemos de cada campaña una fuente inagotable de impacto.</p>
            <router-link to="/servicios" class="boton boton-contorno">Explorar</router-link>
          </div>
          <div class="tarjeta-servicio">
            <h3>Automatiza tus procesos</h3>
            <p>Transformamos tu sistema en una solución integral eficiente.</p>
            <router-link to="/servicios" class="boton boton-contorno">Explorar</router-link>
          </div>
          <div class="tarjeta-servicio">
            <h3>Potencia tus ventas</h3>
            <p>Usamos inteligencia de negocios para maximizar tus ventas.</p>
            <router-link to="/servicios" class="boton boton-contorno">Explorar</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección CTA -->
    <section class="seccion cta">
      <div class="contenedor">
        <h2>Unidos en la misión de innovar</h2>
        <p>Descubre por qué diversas industrias nos eligen para captar, entender y fidelizar a sus clientes.</p>
        <router-link to="/contacto" class="boton boton-primario">Trabajemos juntos</router-link>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Inicio'
})
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, var(--color-primario), var(--color-secundario));
  color: white;
  padding: 8rem 0 6rem;
  text-align: center;
}

.hero-contenido {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3.5rem;
  color: white;
  margin-bottom: 1.5rem;
}

.hero-subtitulo {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-botones {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.hero .boton-contorno {
  border-color: white;
  color: white;
}

.hero .boton-contorno:hover {
  background-color: white;
  color: var(--color-primario);
}

.titulo-seccion {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.caracteristicas-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.tarjeta-caracteristica {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.tarjeta-caracteristica:hover {
  transform: translateY(-5px);
}

.icono-caracteristica {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.tarjeta-caracteristica h3 {
  margin-bottom: 1rem;
  color: var(--color-texto);
}

.servicios-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.tarjeta-servicio {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.tarjeta-servicio:hover {
  transform: translateY(-5px);
}

.tarjeta-servicio h3 {
  margin-bottom: 1rem;
  color: var(--color-texto);
}

.tarjeta-servicio p {
  margin-bottom: 1.5rem;
}

.cta {
  background-color: var(--color-primario);
  color: white;
  text-align: center;
  border-radius: 1rem;
  margin: 2rem auto;
  max-width: 1000px;
}

.cta h2 {
  color: white;
  margin-bottom: 1rem;
}

.cta p {
  margin-bottom: 2rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .hero {
    padding: 6rem 0 4rem;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .caracteristicas-grid,
  .servicios-grid {
    grid-template-columns: 1fr;
  }

  .seccion {
    padding: 3rem 0;
  }

  .hero-botones {
    flex-direction: column;
    align-items: center;
  }
}
</style>
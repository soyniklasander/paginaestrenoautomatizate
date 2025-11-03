<template>
  <div class="servicios">
    <!-- Sección Hero -->
    <section class="hero">
      <div class="contenedor hero-contenido">
        <h1>Nuestros Servicios</h1>
        <p class="hero-subtitulo">Soluciones integrales para tu negocio</p>
      </div>
    </section>

    <!-- Sección Categorías de Servicios -->
    <section class="seccion servicios-lista">
      <div class="contenedor">
        <div class="servicios-grid">
          <!-- Marketing Digital -->
          <div class="categoria-servicio">
            <div class="cabecera-servicio">
              <div class="icono-servicio">🎯</div>
              <h2>Marketing Digital</h2>
            </div>
            <div class="caracteristicas-servicio">
              <div class="caracteristica">
                <h3>Gestión de Redes Sociales</h3>
                <p>Creamos y gestionamos contenido que conecta con tu audiencia.</p>
              </div>
              <div class="caracteristica">
                <h3>SEO y SEM</h3>
                <p>Optimizamos tu presencia online para mayor visibilidad.</p>
              </div>
              <div class="caracteristica">
                <h3>Email Marketing</h3>
                <p>Campañas efectivas para conectar con tus clientes.</p>
              </div>
            </div>
            <router-link to="/contacto" class="boton boton-primario">Consultar</router-link>
          </div>

          <!-- Desarrollo Web -->
          <div class="categoria-servicio">
            <div class="cabecera-servicio">
              <div class="icono-servicio">💻</div>
              <h2>Desarrollo Web</h2>
            </div>
            <div class="caracteristicas-servicio">
              <div class="caracteristica">
                <h3>Sitios Web Corporativos</h3>
                <p>Diseños modernos y responsivos que reflejan tu marca.</p>
              </div>
              <div class="caracteristica">
                <h3>E-commerce</h3>
                <p>Tiendas online optimizadas para vender más.</p>
              </div>
              <div class="caracteristica">
                <h3>Aplicaciones Web</h3>
                <p>Soluciones personalizadas para tu negocio.</p>
              </div>
            </div>
            <router-link to="/contacto" class="boton boton-primario">Consultar</router-link>
          </div>

          <!-- Automatización -->
          <div class="categoria-servicio">
            <div class="cabecera-servicio">
              <div class="icono-servicio">⚙️</div>
              <h2>Automatización</h2>
            </div>
            <div class="caracteristicas-servicio">
              <div class="caracteristica">
                <h3>Procesos Empresariales</h3>
                <p>Optimizamos tus flujos de trabajo.</p>
              </div>
              <div class="caracteristica">
                <h3>CRM Personalizado</h3>
                <p>Gestión eficiente de relaciones con clientes.</p>
              </div>
              <div class="caracteristica">
                <h3>Integración de Sistemas</h3>
                <p>Conectamos tus herramientas existentes.</p>
              </div>
            </div>
            <router-link to="/contacto" class="boton boton-primario">Consultar</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección Proceso -->
    <section class="seccion proceso">
      <div class="contenedor">
        <h2 class="titulo-seccion">Nuestro Proceso</h2>
        <div class="pasos-proceso">
          <div class="paso">
            <div class="numero-paso">1</div>
            <h3>Análisis</h3>
            <p>Entendemos tus necesidades y objetivos</p>
          </div>
          <div class="paso">
            <div class="numero-paso">2</div>
            <h3>Estrategia</h3>
            <p>Diseñamos la solución perfecta</p>
          </div>
          <div class="paso">
            <div class="numero-paso">3</div>
            <h3>Implementación</h3>
            <p>Ejecutamos con precisión</p>
          </div>
          <div class="paso">
            <div class="numero-paso">4</div>
            <h3>Optimización</h3>
            <p>Mejora continua de resultados</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección CTA -->
    <section class="seccion cta">
      <div class="contenedor">
        <h2>¿Listo para transformar tu negocio?</h2>
        <p>Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos.</p>
        <router-link to="/contacto" class="boton boton-primario">Empezar Ahora</router-link>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Servicios'
})
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, var(--color-primario), var(--color-secundario));
  color: white;
  padding: 8rem 0 4rem;
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
  opacity: 0.9;
}

.servicios-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.categoria-servicio {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.categoria-servicio:hover {
  transform: translateY(-5px);
}

.cabecera-servicio {
  margin-bottom: 2rem;
}

.icono-servicio {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.caracteristicas-servicio {
  margin: 2rem 0;
}

.caracteristica {
  margin-bottom: 1.5rem;
  text-align: left;
}

.caracteristica h3 {
  color: var(--color-texto);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.caracteristica p {
  color: var(--color-texto);
  opacity: 0.8;
}

.proceso {
  background-color: var(--color-fondo-claro);
}

.titulo-seccion {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.pasos-proceso {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.paso {
  text-align: center;
  position: relative;
}

.paso:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 2rem;
  right: -1rem;
  width: 2rem;
  height: 2px;
  background-color: var(--color-primario);
}

.numero-paso {
  width: 4rem;
  height: 4rem;
  background-color: var(--color-primario);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 1rem;
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
    padding: 6rem 0 3rem;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .servicios-grid {
    grid-template-columns: 1fr;
  }

  .pasos-proceso {
    grid-template-columns: 1fr;
  }

  .paso:not(:last-child)::after {
    display: none;
  }
}
</style>
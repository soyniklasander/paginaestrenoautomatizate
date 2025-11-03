<template>
  <div class="nosotros">
    <!-- Sección Hero -->
    <section class="hero">
      <div class="contenedor hero-contenido">
        <h1>Sobre Nosotros</h1>
        <p class="hero-subtitulo">Impulsamos la transformación digital de tu negocio</p>
      </div>
    </section>

    <!-- Sección Misión -->
    <section class="seccion mision">
      <div class="contenedor">
        <div class="mision-grid">
          <div class="mision-contenido">
            <h2>Nuestra Misión</h2>
            <p>Somos un equipo apasionado por la innovación y la transformación digital. Nos dedicamos a ayudar a las empresas a alcanzar su máximo potencial a través de soluciones tecnológicas avanzadas y estrategias digitales efectivas.</p>
            <div class="valores">
              <div class="valor-item">
                <div class="valor-icono">🎯</div>
                <h3>Innovación Constante</h3>
                <p>Siempre a la vanguardia de las últimas tecnologías y tendencias.</p>
              </div>
              <div class="valor-item">
                <div class="valor-icono">🤝</div>
                <h3>Compromiso Total</h3>
                <p>Tu éxito es nuestro éxito. Nos comprometemos al 100% con cada proyecto.</p>
              </div>
            </div>
          </div>
          <div class="mision-imagen">
            <img src="@/activos/mision-equipo.svg" alt="Nuestro equipo trabajando" />
          </div>
        </div>
      </div>
    </section>

    <!-- Sección Equipo -->
    <section class="seccion equipo">
      <div class="contenedor">
        <h2 class="titulo-seccion">Nuestro Equipo</h2>
        <p class="subtitulo-seccion">Un equipo multidisciplinario de expertos listos para impulsar tu negocio</p>
        <div class="equipo-grid">
          <div class="tarjeta-equipo">
            <div class="equipo-avatar">
              <span class="avatar-placeholder">👨‍💻</span>
            </div>
            <h3>Desarrollo Web</h3>
            <p>Expertos en crear soluciones web modernas y escalables</p>
          </div>
          <div class="tarjeta-equipo">
            <div class="equipo-avatar">
              <span class="avatar-placeholder">📊</span>
            </div>
            <h3>Marketing Digital</h3>
            <p>Estrategas en posicionamiento y crecimiento online</p>
          </div>
          <div class="tarjeta-equipo">
            <div class="equipo-avatar">
              <span class="avatar-placeholder">🎨</span>
            </div>
            <h3>Diseño UX/UI</h3>
            <p>Creativos enfocados en experiencias memorables</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección Estadísticas -->
    <section class="seccion estadisticas">
      <div class="contenedor">
        <div class="estadisticas-grid">
          <div class="tarjeta-estadistica">
            <h3>100+</h3>
            <p>Proyectos Completados</p>
          </div>
          <div class="tarjeta-estadistica">
            <h3>50+</h3>
            <p>Clientes Satisfechos</p>
          </div>
          <div class="tarjeta-estadistica">
            <h3>5+</h3>
            <p>Años de Experiencia</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Nosotros'
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

.mision-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.mision-contenido h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.mision-contenido p {
  margin-bottom: 2rem;
  line-height: 1.6;
}

.mision-imagen img {
  width: 100%;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.valores {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.valor-item {
  text-align: center;
  padding: 1.5rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.valor-item:hover {
  transform: translateY(-5px);
}

.valor-icono {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.titulo-seccion {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.subtitulo-seccion {
  text-align: center;
  color: var(--color-texto);
  opacity: 0.8;
  margin-bottom: 3rem;
}

.equipo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.tarjeta-equipo {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.tarjeta-equipo:hover {
  transform: translateY(-5px);
}

.equipo-avatar {
  width: 100px;
  height: 100px;
  margin: 0 auto 1.5rem;
  background: var(--color-fondo-claro);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-placeholder {
  font-size: 2.5rem;
}

.estadisticas {
  background-color: var(--color-fondo-claro);
}

.estadisticas-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.tarjeta-estadistica {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.tarjeta-estadistica h3 {
  font-size: 2.5rem;
  color: var(--color-primario);
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .hero {
    padding: 6rem 0 3rem;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .mision-grid {
    grid-template-columns: 1fr;
  }

  .valores,
  .equipo-grid,
  .estadisticas-grid {
    grid-template-columns: 1fr;
  }

  .mision-imagen {
    order: -1;
  }
}
</style>
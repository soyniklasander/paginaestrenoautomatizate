<template>
  <div class="contacto">
    <!-- Sección Hero -->
    <section class="hero">
      <div class="contenedor hero-contenido">
        <h1>Contáctanos</h1>
        <p class="hero-subtitulo">¡Conversemos sobre tu próximo proyecto!</p>
      </div>
    </section>

    <!-- Sección Formulario de Contacto -->
    <section class="seccion seccion-contacto">
      <div class="contenedor">
        <div class="contacto-grid">
          <!-- Formulario -->
          <div class="contenedor-formulario">
            <h2>Envíanos un mensaje</h2>
            <form @submit.prevent="enviarFormulario" class="formulario-contacto">
              <div class="grupo-formulario">
                <label for="nombre">Nombre</label>
                <input 
                  type="text" 
                  id="nombre" 
                  v-model="formulario.nombre" 
                  required 
                  placeholder="Tu nombre completo"
                />
              </div>
              
              <div class="grupo-formulario">
                <label for="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="formulario.email" 
                  required 
                  placeholder="tu@email.com"
                />
              </div>
              
              <div class="grupo-formulario">
                <label for="servicio">Servicio de interés</label>
                <select id="servicio" v-model="formulario.servicio" required>
                  <option value="">Selecciona un servicio</option>
                  <option value="marketing">Marketing Digital</option>
                  <option value="desarrollo">Desarrollo Web</option>
                  <option value="automatizacion">Automatización</option>
                </select>
              </div>
              
              <div class="grupo-formulario">
                <label for="mensaje">Mensaje</label>
                <textarea 
                  id="mensaje" 
                  v-model="formulario.mensaje" 
                  required 
                  placeholder="Cuéntanos sobre tu proyecto"
                  rows="5"
                ></textarea>
              </div>
              
              <button type="submit" class="boton boton-primario">Enviar Mensaje</button>
            </form>
          </div>

          <!-- Información de Contacto -->
          <div class="info-contacto">
            <div class="tarjeta-info">
              <h2>Información de Contacto</h2>
              <div class="items-info">
                <div class="item-info">
                  <div class="icono-info">📍</div>
                  <div class="contenido-info">
                    <h3>Ubicación</h3>
                    <p>Trujillo – Perú</p>
                  </div>
                </div>
                
                <div class="item-info">
                  <div class="icono-info">📱</div>
                  <div class="contenido-info">
                    <h3>Teléfono</h3>
                    <p><a href="tel:919292371">919 292 371</a></p>
                  </div>
                </div>
                
                <div class="item-info">
                  <div class="icono-info">✉️</div>
                  <div class="contenido-info">
                    <h3>Email</h3>
                    <p><a href="mailto:hola@automatizate.pe">hola@automatizate.pe</a></p>
                  </div>
                </div>
              </div>

              <div class="redes-sociales">
                <h3>Síguenos</h3>
                <div class="enlaces-sociales">
                  <a href="#" target="_blank" class="enlace-social">Facebook</a>
                  <a href="#" target="_blank" class="enlace-social">LinkedIn</a>
                  <a href="#" target="_blank" class="enlace-social">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Contacto',
  setup() {
    const formulario = ref({
      nombre: '',
      email: '',
      servicio: '',
      mensaje: ''
    })

    const enviarFormulario = async () => {
      try {
        console.log('Formulario enviado:', formulario.value)
        // Aquí implementaremos la lógica de envío del formulario
      } catch (error) {
        console.error('Error al enviar el formulario:', error)
      }
    }

    return {
      formulario,
      enviarFormulario
    }
  }
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

.seccion-contacto {
  background-color: var(--color-fondo-claro);
}

.contacto-grid {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 4rem;
}

.contenedor-formulario {
  background: white;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.contenedor-formulario h2 {
  margin-bottom: 2rem;
  color: var(--color-texto);
}

.grupo-formulario {
  margin-bottom: 1.5rem;
}

.grupo-formulario label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-texto);
  font-weight: 500;
}

.grupo-formulario input,
.grupo-formulario select,
.grupo-formulario textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.grupo-formulario input:focus,
.grupo-formulario select:focus,
.grupo-formulario textarea:focus {
  outline: none;
  border-color: var(--color-primario);
}

.tarjeta-info {
  background: white;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.tarjeta-info h2 {
  margin-bottom: 2rem;
  color: var(--color-texto);
}

.items-info {
  margin-bottom: 3rem;
}

.item-info {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.icono-info {
  font-size: 1.5rem;
  margin-right: 1rem;
}

.contenido-info h3 {
  color: var(--color-texto);
  margin-bottom: 0.5rem;
}

.contenido-info a {
  color: var(--color-primario);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contenido-info a:hover {
  color: var(--color-secundario);
}

.redes-sociales h3 {
  margin-bottom: 1rem;
}

.enlaces-sociales {
  display: flex;
  gap: 1rem;
}

.enlace-social {
  color: var(--color-texto);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: var(--color-fondo-claro);
  transition: all 0.3s ease;
}

.enlace-social:hover {
  background-color: var(--color-primario);
  color: white;
}

@media (max-width: 768px) {
  .hero {
    padding: 6rem 0 3rem;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .contacto-grid {
    grid-template-columns: 1fr;
  }

  .contenedor-formulario,
  .tarjeta-info {
    padding: 2rem;
  }

  .enlaces-sociales {
    flex-direction: column;
  }
}
</style>
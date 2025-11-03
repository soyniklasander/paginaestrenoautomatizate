import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Habilitar CORS para permitir llamadas desde el cliente en desarrollo
  app.enableCors();
  // Alinear el puerto del servidor con docker-compose y evitar choque con Vite
  await app.listen(3001);
}
bootstrap();
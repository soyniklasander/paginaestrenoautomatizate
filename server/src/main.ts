import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Habilitar CORS para permitir llamadas desde el cliente en desarrollo
  // Usa variable de entorno CORS_ORIGIN si está definida; por defecto permite cualquier origen en dev
  const corsOrigin = process.env.CORS_ORIGIN || '*';
  app.enableCors({ origin: corsOrigin });
  // Escucha en el puerto configurado por entorno o usa 3001 por defecto
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;
  await app.listen(port);
}
bootstrap();
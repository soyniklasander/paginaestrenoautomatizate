import { Module } from '@nestjs/common';
import { AutenticacionModule } from './modules/autenticacion/autenticacion.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { ProyectosModule } from './modules/proyectos/proyectos.module';
import { ContactoModule } from './modules/contacto/contacto.module';

@Module({
  imports: [
    AutenticacionModule,
    UsuariosModule,
    ProyectosModule,
    ContactoModule,
  ],
})
export class AppModule {}
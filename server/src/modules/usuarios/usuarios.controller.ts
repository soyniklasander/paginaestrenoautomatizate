import { Controller, Get } from '@nestjs/common';

@Controller('usuarios')
export class UsuariosController {
  @Get('salud')
  salud() {
    return { ok: true, modulo: 'usuarios' };
  }
}

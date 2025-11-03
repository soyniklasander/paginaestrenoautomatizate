import { Controller, Get } from '@nestjs/common';

@Controller('proyectos')
export class ProyectosController {
  @Get('salud')
  salud() {
    return { ok: true, modulo: 'proyectos' };
  }
}

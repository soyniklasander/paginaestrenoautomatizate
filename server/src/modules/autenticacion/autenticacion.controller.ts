import { Controller, Get } from '@nestjs/common';

@Controller('autenticacion')
export class AutenticacionController {
  @Get('salud')
  salud() {
    return { ok: true, modulo: 'autenticacion' };
  }
}

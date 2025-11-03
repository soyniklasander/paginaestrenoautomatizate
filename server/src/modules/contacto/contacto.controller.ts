import { Controller, Get } from '@nestjs/common';

@Controller('contacto')
export class ContactoController {
  @Get('salud')
  salud() {
    return { ok: true, modulo: 'contacto' };
  }
}

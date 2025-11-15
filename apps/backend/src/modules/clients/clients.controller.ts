import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  fetchClients() {
    return this.clientsService.findAll();
  }

  @Post()
  createClient(
    @Body()
    body: {
      id: string;
      name: string;
      industry: string;
      brandVoice: string;
      seats: number;
    },
  ) {
    return this.clientsService.create(body);
  }
}

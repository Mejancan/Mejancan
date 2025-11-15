import { Injectable } from '@nestjs/common';

type ClientProfile = {
  id: string;
  name: string;
  industry: string;
  brandVoice: string;
  seats: number;
};

@Injectable()
export class ClientsService {
  private clients: ClientProfile[] = [
    {
      id: 'client_001',
      name: 'Aurora Skincare',
      industry: 'Beauty',
      brandVoice: 'friendly',
      seats: 5,
    },
  ];

  findAll() {
    return this.clients;
  }

  create(client: ClientProfile) {
    this.clients.push(client);
    return client;
  }
}

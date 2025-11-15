import { Injectable } from '@nestjs/common';

type IntegrationConnectParams = {
  platform: string;
  oauthCode: string;
};

@Injectable()
export class AuthService {
  status() {
    return {
      healthy: true,
      timestamp: new Date().toISOString(),
      integrations: ['meta', 'linkedin', 'whatsapp'],
    };
  }

  connectIntegration(payload: IntegrationConnectParams) {
    return {
      ...payload,
      status: 'connected',
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString(),
    };
  }
}

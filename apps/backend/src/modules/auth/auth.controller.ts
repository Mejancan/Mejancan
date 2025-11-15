import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('status')
  getStatus() {
    return this.authService.status();
  }

  @Post('integrations')
  connectIntegration(@Body() body: { platform: string; oauthCode: string }) {
    return this.authService.connectIntegration(body);
  }
}

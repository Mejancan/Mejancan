import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { SchedulingService } from './scheduling.service';

@Controller('scheduling')
export class SchedulingController {
  constructor(private readonly schedulingService: SchedulingService) {}

  @Get('optimal-slots')
  getOptimalSlots(@Query('platform') platform = 'instagram') {
    return this.schedulingService.getOptimalSlots(platform);
  }

  @Post('queue')
  queuePost(
    @Body()
    body: {
      clientId: string;
      platform: string;
      assetId: string;
      scheduledFor: string;
    },
  ) {
    return this.schedulingService.queuePost(body);
  }
}

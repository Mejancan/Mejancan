import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContentService } from './content.service';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get('templates')
  getTemplates() {
    return this.contentService.listTemplates();
  }

  @Post('autopilot')
  buildAutopilot(
    @Body()
    body: {
      industry: string;
      audience: string;
      postingCadence: string;
    },
  ) {
    return this.contentService.buildAutopilotPlan(body);
  }
}

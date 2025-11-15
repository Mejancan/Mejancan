import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { InboxService } from './inbox.service';

@Controller('inbox')
export class InboxController {
  constructor(private readonly inboxService: InboxService) {}

  @Get('threads')
  listThreads() {
    return this.inboxService.listThreads();
  }

  @Patch('threads/assign')
  assignThread(@Body() body: { threadId: string; assignee: string }) {
    return this.inboxService.assignThread(body.threadId, body.assignee);
  }

  @Post('reply')
  sendReply(
    @Body() body: { threadId: string; message: string; mode: 'ai' | 'manual' },
  ) {
    return this.inboxService.sendReply(body);
  }
}

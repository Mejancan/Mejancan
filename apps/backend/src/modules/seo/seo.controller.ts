import { Body, Controller, Post } from '@nestjs/common';
import { SeoService } from './seo.service';

@Controller('seo')
export class SeoController {
  constructor(private readonly seoService: SeoService) {}

  @Post('blogs')
  createBlog(
    @Body() body: { topic: string; keyword: string; brandVoice: string },
  ) {
    return this.seoService.generateBlog(body);
  }

  @Post('blogs/syndicate')
  syndicate(@Body() body: { blogId: string }) {
    return this.seoService.syndicate(body.blogId);
  }
}

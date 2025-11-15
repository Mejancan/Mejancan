import { Injectable } from '@nestjs/common';

@Injectable()
export class SeoService {
  generateBlog(input: { topic: string; keyword: string; brandVoice: string }) {
    return {
      ...input,
      title: `${input.topic} – Complete Guide`,
      metaDescription: `Learn how ${input.topic.toLowerCase()} impacts your ${input.keyword} strategy.`,
      outline: ['Intro', 'Pain points', 'Solution framework', 'CTA'],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: `${input.topic} – Complete Guide`,
      },
    };
  }

  syndicate(blogId: string) {
    return {
      blogId,
      socialPosts: 10,
      reels: 3,
      tweets: 5,
      emailNewsletters: 1,
      status: 'ready_for_review',
    };
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class ContentService {
  listTemplates() {
    return [
      {
        id: 'social_launch',
        channels: ['instagram', 'tiktok'],
        template: 'Hey {audience}, meet {product_name}! {hook}',
      },
      {
        id: 'thought_leadership',
        channels: ['linkedin'],
        template:
          '{industry} trend: {trend_insight}. Here is how {solution} helps.',
      },
    ];
  }

  buildAutopilotPlan(input: {
    industry: string;
    audience: string;
    postingCadence: string;
  }) {
    return {
      ...input,
      calendar: [
        {
          day: 'Monday',
          topic: 'Industry insight',
          channel: 'LinkedIn',
          assetType: 'Article snippet',
        },
        {
          day: 'Wednesday',
          topic: 'Problem/Solution',
          channel: 'Instagram',
          assetType: 'Carousel',
        },
      ],
    };
  }
}

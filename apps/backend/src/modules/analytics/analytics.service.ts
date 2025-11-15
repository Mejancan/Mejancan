import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsService {
  getOverview() {
    return {
      engagementRate: 5.4,
      reach: 183200,
      clicks: 1290,
      conversions: 82,
      bestPost: {
        id: 'post_123',
        platform: 'instagram',
        metric: 'reach',
      },
    };
  }

  getRecommendations() {
    return [
      {
        statement:
          'Video explainers with carousel follow-ups outperform static posts by 32%.',
        suggestedChannel: 'Instagram Reels',
        suggestedTopic: 'Behind-the-scenes production',
      },
      {
        statement: 'Audience engages most between 09:00-11:00 UTC on weekdays.',
        suggestedChannel: 'LinkedIn',
        suggestedTopic: 'Thought leadership',
      },
    ];
  }
}

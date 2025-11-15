import { Injectable } from '@nestjs/common';

type ScheduleRequest = {
  clientId: string;
  platform: string;
  assetId: string;
  scheduledFor: string;
};

@Injectable()
export class SchedulingService {
  getOptimalSlots(platform: string) {
    return {
      platform,
      timezone: 'UTC',
      slots: [
        '2025-01-10T09:00:00Z',
        '2025-01-10T14:00:00Z',
        '2025-01-11T18:00:00Z',
      ],
    };
  }

  queuePost(request: ScheduleRequest) {
    return {
      jobId: `${request.platform}-${Date.now()}`,
      status: 'queued',
      ...request,
    };
  }
}

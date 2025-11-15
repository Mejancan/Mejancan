import { Injectable } from '@nestjs/common';

type MessageThread = {
  id: string;
  platform: string;
  participant: string;
  lastMessage: string;
  assignedTo?: string;
};

@Injectable()
export class InboxService {
  private threads: MessageThread[] = [
    {
      id: 'thread_001',
      platform: 'whatsapp',
      participant: '+27123456789',
      lastMessage: 'Can you send the latest report?',
      assignedTo: 'sarah',
    },
  ];

  listThreads() {
    return this.threads;
  }

  assignThread(id: string, user: string) {
    const thread = this.threads.find((item) => item.id === id);
    if (thread) {
      thread.assignedTo = user;
    }
    return thread;
  }

  sendReply(payload: {
    threadId: string;
    message: string;
    mode: 'ai' | 'manual';
  }) {
    return {
      ...payload,
      status: 'pending_approval',
      suggestedBy: payload.mode === 'ai' ? 'brand_ai_assistant' : undefined,
    };
  }
}

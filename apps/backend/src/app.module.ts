import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { ClientsModule } from './modules/clients/clients.module';
import { ContentModule } from './modules/content/content.module';
import { SchedulingModule } from './modules/scheduling/scheduling.module';
import { InboxModule } from './modules/inbox/inbox.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { SeoModule } from './modules/seo/seo.module';

@Module({
  imports: [
    AuthModule,
    ClientsModule,
    ContentModule,
    SchedulingModule,
    InboxModule,
    AnalyticsModule,
    SeoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

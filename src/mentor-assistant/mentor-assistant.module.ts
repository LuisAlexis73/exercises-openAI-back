import { Module } from '@nestjs/common';
import { MentorAssistantService } from './mentor-assistant.service';
import { MentorAssistantController } from './mentor-assistant.controller';

@Module({
  controllers: [MentorAssistantController],
  providers: [MentorAssistantService],
})
export class MentorAssistantModule {}

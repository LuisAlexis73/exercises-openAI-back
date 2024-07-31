import { Module } from '@nestjs/common';
import { GptModule } from './gpt/gpt.module';
import { ConfigModule } from '@nestjs/config';
import { MentorAssistantModule } from './mentor-assistant/mentor-assistant.module';

@Module({
  imports: [ConfigModule.forRoot(), GptModule, MentorAssistantModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

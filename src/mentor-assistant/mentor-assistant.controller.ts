import { Body, Controller, Post } from '@nestjs/common';
import { MentorAssistantService } from './mentor-assistant.service';
import { QuestionDto } from './dto/question.dto';

@Controller('mentor-assistant')
export class MentorAssistantController {
  constructor(
    private readonly mentorAssistantService: MentorAssistantService,
  ) {}

  @Post('create-thread')
  async createThread() {
    return await this.mentorAssistantService.createThread();
  }

  @Post('user-question')
  async userQuestion(@Body() questionDto: QuestionDto) {
    return await this.mentorAssistantService.userQuestion(questionDto);
  }
}

import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import {
  checkCompleteStatusUseCase,
  createMessageUSeCase,
  createRunUseCase,
  createThreadUseCase,
  getMessageListUseCAse,
} from './use-cases';
import { QuestionDto } from './dto/question.dto';

@Injectable()
export class MentorAssistantService {
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async createThread() {
    return createThreadUseCase(this.openai);
  }

  async userQuestion(questionDto: QuestionDto) {
    const { threadId, question } = questionDto;
    const message = await createMessageUSeCase(this.openai, {
      threadId,
      question,
    });

    const run = await createRunUseCase(this.openai, {
      threadId,
    });

    await checkCompleteStatusUseCase(this.openai, {
      threadId,
      runId: run.id,
    });

    const messages = await getMessageListUseCAse(this.openai, {
      threadId,
    });

    return messages;
  }
}

import { Question } from "@/domain/forum/enterprise/entities/question";

import { QuestionsRepository } from "@/domain/forum/application/repositories/questions-repository";

interface FetchRecentQuestionCaseRequest {
  page: number;
}

interface FetchRecentQuestionCaseResponse {
  questions: Question[];
}

export class FetchRecentQuestionCase {
  constructor(private questionRepository: QuestionsRepository) {}

  async execute({
    page,
  }: FetchRecentQuestionCaseRequest): Promise<FetchRecentQuestionCaseResponse> {
    const questions = await this.questionRepository.findManyRecent({ page });

    return { questions };
  }
}

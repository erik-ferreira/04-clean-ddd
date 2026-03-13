import { Answer } from "@/domain/forum/enterprise/entities/answer";

import { AnswersRepository } from "@/domain/forum/application/repositories/answers-repository";

interface FetchQuestionAnswersCaseRequest {
  questionId: string;
  page: number;
}

interface FetchQuestionAnswersCaseResponse {
  answers: Answer[];
}

export class FetchQuestionAnswersCase {
  constructor(private answerRepository: AnswersRepository) {}

  async execute({
    questionId,
    page,
  }: FetchQuestionAnswersCaseRequest): Promise<FetchQuestionAnswersCaseResponse> {
    const answers = await this.answerRepository.findManyByQuestionId(
      questionId,
      { page },
    );

    return { answers };
  }
}

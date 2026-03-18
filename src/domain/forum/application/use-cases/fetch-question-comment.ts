import { QuestionComment } from "@/domain/forum/enterprise/entities/question-comment";

import { QuestionCommentsRepository } from "../repositories/question-comments-repository";

interface FetchQuestionCommentsCaseRequest {
  questionId: string;
  page: number;
}

interface FetchQuestionCommentsCaseResponse {
  questionComments: QuestionComment[];
}

export class FetchQuestionCommentsCase {
  constructor(private questionCommentRepository: QuestionCommentsRepository) {}

  async execute({
    questionId,
    page,
  }: FetchQuestionCommentsCaseRequest): Promise<FetchQuestionCommentsCaseResponse> {
    const questionComments =
      await this.questionCommentRepository.findManyByQuestionId(questionId, {
        page,
      });

    return { questionComments };
  }
}

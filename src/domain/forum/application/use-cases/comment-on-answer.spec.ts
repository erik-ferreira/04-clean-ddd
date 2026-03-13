import { CommentOnAnswerUseCase } from "./comment-on-answer";

import { InMemoryAnswersRepository } from "teste/in-memory-answers-repository";
import { InMemoryAnswerCommentsRepository } from "teste/in-memory-answer-comments-repository";
import { makeAnswer } from "teste/factories/make-answer";

let inMemoryAnswersRepository: InMemoryAnswersRepository;
let inMemoryAnswersCommentsRepository: InMemoryAnswerCommentsRepository;
let sut: CommentOnAnswerUseCase;

describe("Comment on Answer", () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository();
    inMemoryAnswersCommentsRepository = new InMemoryAnswerCommentsRepository();
    sut = new CommentOnAnswerUseCase(
      inMemoryAnswersRepository,
      inMemoryAnswersCommentsRepository,
    );
  });

  it("should be able to comment on answer", async () => {
    const question = makeAnswer();

    await inMemoryAnswersRepository.create(question);

    await sut.execute({
      answerId: question.id.toString(),
      authorId: question.authorId.toString(),
      content: "Comentário teste",
    });

    expect(inMemoryAnswersCommentsRepository.items[0].content).toEqual(
      "Comentário teste",
    );
  });
});

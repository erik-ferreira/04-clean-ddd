import { makeAnswer } from "teste/factories/make-answer";
import { InMemoryAnswerAttachmentRepository } from "teste/repositories/in-memory-answer-attachments-repository";
import { InMemoryAnswersRepository } from "teste/repositories/in-memory-answers-repository";
import { OnAnswerCreated } from "./on-answer-created";

let inMemoryAnswerAttachmentRepository: InMemoryAnswerAttachmentRepository;
let inMemoryAnswerRepository: InMemoryAnswersRepository;

describe("On Answer Created", () => {
  beforeEach(() => {
    inMemoryAnswerAttachmentRepository =
      new InMemoryAnswerAttachmentRepository();
    inMemoryAnswerRepository = new InMemoryAnswersRepository(
      inMemoryAnswerAttachmentRepository,
    );
  });

  it("should send a notification when an answer is created", async () => {
    const _onAnswerCreated = new OnAnswerCreated();

    const answer = makeAnswer();

    inMemoryAnswerRepository.create(answer);
  });
});

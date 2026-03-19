import { FetchRecentQuestionCase } from "./fetch-recent-questions";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

import { makeQuestion } from "teste/factories/make-question";
import { InMemoryQuestionsRepository } from "teste/in-memory-question-repository";

let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let sut: FetchRecentQuestionCase;

describe("Fetch Recent Question", () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository();
    sut = new FetchRecentQuestionCase(inMemoryQuestionsRepository);
  });

  it("should be able to delete a question", async () => {
    await inMemoryQuestionsRepository.create(
      makeQuestion({ createdAt: new Date(2026, 0, 20) }),
    );
    await inMemoryQuestionsRepository.create(
      makeQuestion({ createdAt: new Date(2026, 0, 18) }),
    );
    await inMemoryQuestionsRepository.create(
      makeQuestion({ createdAt: new Date(2026, 0, 23) }),
    );

    const result = await sut.execute({ page: 1 });

    expect(result.value?.questions).toEqual([
      expect.objectContaining({ createdAt: new Date(2026, 0, 23) }),
      expect.objectContaining({ createdAt: new Date(2026, 0, 20) }),
      expect.objectContaining({ createdAt: new Date(2026, 0, 18) }),
    ]);
  });

  it("should be able to fetch paginated recent questions", async () => {
    for (let i = 1; i <= 22; i++) {
      await inMemoryQuestionsRepository.create(makeQuestion());
    }

    const result = await sut.execute({ page: 2 });

    expect(result.value?.questions).toHaveLength(2);
  });
});

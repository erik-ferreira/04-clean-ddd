import { CreateQuestionUseCase } from "./create-question";
import { Question } from "../../enterprise/entities/question";
import { QuestionsRepository } from "../repositories/questions-repository";

const fakeQuestionRepository: QuestionsRepository = {
  create: async (question: Question) => {},
};

test("create a question", async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionRepository);

  const { question } = await createQuestion.execute({
    authorId: "1",
    title: "Nova pergunta",
    content: "Conteúdo da resposta",
  });

  expect(question.id).toBeTruthy();
});

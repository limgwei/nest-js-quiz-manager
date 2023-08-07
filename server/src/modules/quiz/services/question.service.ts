import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Question } from "../entities/question.entity";
import { QuestionRepository } from "../repositories/question.repository";
import { CreateQuestionDto } from "../dto/create-question.dto";
import { Quiz } from "../entities/quiz.entity";

@Injectable()
export class QuestionService {

  constructor(
    @InjectRepository(Question) private questionRepository:QuestionRepository
  ){}


  async createQuestion(question: CreateQuestionDto,quiz:Quiz): Promise<Question> {
    const newQuestion =  await this.questionRepository.save({
      question: question.question,
      quiz: quiz
    });


    return newQuestion;
  }

}
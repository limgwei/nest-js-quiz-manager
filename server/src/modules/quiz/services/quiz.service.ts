import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizDto } from "../dto/CreateQuiz.dto";
import { Quiz } from "../entities/quiz.entity";
import { QuizRepository } from "../repositories/quiz.repository";


@Injectable()
export class QuizService{

  constructor(
    @InjectRepository(Quiz) private quizRepository:QuizRepository
    ){}

  async getAllQuiz(){
    return await this.quizRepository.find({relations:{questions:true}});
  }


  async getQuizById(id: number) :Promise<Quiz>{
    return await this.quizRepository.findOne({
      where:{
        id: id
      },
      relations:{
        questions:true
      }
    });
  }

  async createNewQuiz(quiz: CreateQuizDto){
    return await this.quizRepository.save(quiz);
  }
}
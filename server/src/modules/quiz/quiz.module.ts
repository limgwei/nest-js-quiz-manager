import { Module } from '@nestjs/common';
import { QuizService } from './services/quiz.service';
import { QuestionService } from './services/question.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { QuestionController } from './controllers/question.controller';
import { Question } from './entities/question.entity';
import { QuestionRepository } from './repositories/question.repository';
import { QuizRepository } from './repositories/quiz.repository';
import { QuizController } from './controllers/quiz.controller';


@Module({

  providers:[QuizService,QuestionService],
  controllers:[QuizController,QuestionController],
  imports:[TypeOrmModule.forFeature([Quiz,Question,QuestionRepository,QuizRepository])]
})
export class QuizModule {}

import { IsNotEmpty,Length } from "class-validator"

export class CreateQuestionDto{


  @IsNotEmpty({message:"The question should not empty"})
  question:string

  @IsNotEmpty()
  quizId:number

}
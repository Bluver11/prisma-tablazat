import { IsDefined, IsInt, IsNegative, IsNotEmpty, IsPositive, MinLength, } from "class-validator";

export class CreatePersonDto {
  
  
  @IsNotEmpty({message:'A név nem lehet üres'})
  @MinLength(4,{message:'A név legalább 4 karakter hosszú legyen!'})
  name:string;
  @IsDefined({message:'A kor megadás kötelező'})
  @IsInt()
  @IsPositive({message:'Ne legye negatív'})
  age:number;
  @IsDefined({message:'Város megadása kötelező'})
  City:string;
}

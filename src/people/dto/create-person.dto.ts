import { IsDefined, IsInt, IsNegative, IsNotEmpty, IsPositive, MinLength, } from "class-validator";

export class CreatePersonDto {
  
  
  @IsNotEmpty({message:'A név megadása kötelező!'})
  @MinLength(4,{message:'A névnek legalább 4 karakter hosszúnak kell lennie!'})
  name:string;
  @IsDefined({message:'A kor megadás kötelező'})
  @IsInt()
  @IsPositive({message:'A kor nem lehet negatív szám!'})
  age:number;
  @IsDefined({message:'Város megadása kötelező'})
  City:string;
}

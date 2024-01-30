import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PeopleService {

  constructor(private readonly db: PrismaService){}


  create(createPersonDto: CreatePersonDto) {
    return this.db.people.create({
      data: createPersonDto
    })
  }

  findAll() {
    return this.db.people.findMany();
  }

  findOne(id: number) {
    return this.db.people.findFirstOrThrow({
      where: {id}
    });
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return this.db.people.update({
      data: updatePersonDto,
      where: {id}
    });
  }

  remove(id: number) {
    return this.db.people.delete({
      where: {id}
    });
  }
}

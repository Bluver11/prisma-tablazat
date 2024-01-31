import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { PeopleService } from './people.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.peopleService.create(createPersonDto);
  }

  @Get()
  findAll() {
    return this.peopleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try{return await this.peopleService.findOne(+id);
    }
    catch(e)
    {
      if(e.code = "P2025"){
      throw new NotFoundException('A keresett ID nem található!');
      }else{
        throw e;
      }
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
   try{ return await this.peopleService.update(+id, updatePersonDto);
   }catch{
    throw new NotFoundException('A keresett ID nem található!')
   }
  }

  @Delete(':id')
   async remove(@Param('id') id: string) {
    try{return await this.peopleService.remove(+id);
    }catch{
      throw new NotFoundException('A keresett ID nem található!')
    }
  }
}

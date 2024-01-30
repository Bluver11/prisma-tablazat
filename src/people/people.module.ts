import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PeopleController],
  providers: [PeopleService,PrismaService],
})
export class PeopleModule {}

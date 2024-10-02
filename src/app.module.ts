import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { BlogModule } from './blog/blog.module';
import { PrismaService } from './prisma/prisma.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PrismaModule, BlogModule],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
export class AppModule {}

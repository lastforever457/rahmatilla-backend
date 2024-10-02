import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { BlogModule } from './blog/blog.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [PrismaModule, BlogModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}

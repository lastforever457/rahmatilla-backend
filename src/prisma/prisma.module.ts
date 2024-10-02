import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { BlogService } from '../blog/blog.service';

@Module({
  providers: [PrismaService, BlogService],
  exports: [PrismaService, BlogService],
})
export class PrismaModule {}

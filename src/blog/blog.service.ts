import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.blog.create(data);
  }

  findAll(data: any) {
    return this.prisma.blog.findMany(data);
  }

  findOne(data: any) {
    return this.prisma.blog.findUnique(data);
  }

  update(data: any) {
    return this.prisma.blog.update(data);
  }

  remove(data: any) {
    return this.prisma.blog.delete(data);
  }
}

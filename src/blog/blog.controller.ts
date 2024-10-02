import { Controller, Post, Body, Patch } from '@nestjs/common';
import { BlogService } from './blog.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post('create')
  @ApiOperation({ summary: 'Blog yaratish' })
  create(@Body() data: any) {
    return this.blogService.create(data);
  }

  @Post('find-many')
  @ApiOperation({ summary: 'Bloglarni olish' })
  findAll(@Body() data: any) {
    return this.blogService.findAll(data);
  }

  @Post('find-unique')
  @ApiOperation({ summary: 'Blogni olish' })
  findOne(@Body() data: any) {
    return this.blogService.findOne(data);
  }

  @Patch('update')
  @ApiOperation({ summary: 'Blogni yangilash' })
  update(@Body() data: any) {
    return this.blogService.update(data);
  }

  @Post('delete')
  @ApiOperation({ summary: 'Blogni o"chirish' })
  remove(@Body() data: any) {
    return this.blogService.remove(data);
  }
}

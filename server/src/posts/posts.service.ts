import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostsDto } from './dto/posts.dto';
import { Posts } from './entity/posts.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts) private postsService: Repository<Posts>,
  ) {}

  find() {
    return this.postsService.find();
  }

  async findOne(id: number) {
    const post = await this.postsService.findOne({
      where: { id: id },
    });

    return post;
  }

  async create(postDto: PostsDto) {
    const post = await this.postsService.create(postDto);

    return this.postsService.save(post);
  }

  async remove(id: number) {
    const post = await this.postsService.findOne({
      where: { id: id },
    });
    return this.postsService.remove(post);
  }
}

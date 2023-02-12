import { inject, injectable } from 'inversify';
import { CommentServiceInterface } from './comment-service.interface.js';
import { Component } from '../../types/component.types.js';
import { CommentEntity } from './comment.entity.js';
import { DocumentType } from '@typegoose/typegoose';
import CreateCommentDto from './dto/create-comment.dto.js';

@injectable()
export default class CommentService implements CommentServiceInterface {
  constructor(
    @inject(Component.CommentModel) private readonly commentModel: types.ModelType<CommentEntity>,
  ) {}

  public async create(dto: CreateCommentDto): Promise<DocumentType<CommentEntity>> {
    const comment = await this.commentModel.create(dto);

    return comment.populate(['userId']);
  }

  public async findByFilmId(filmId: string): Promise<DocumentType<CommentEntity>[] | null> {
    return this.commentModel.find({ filmId }).populate(['userId']).exec();
  }

  public async deleteByFilmId(filmId: string): Promise<number | null> {
    const result = this.commentModel.deleteMany({ filmId }).exec();

    return result.deletedCount;
  }
}

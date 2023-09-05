import { inject, injectable } from 'inversify';
import { PostService } from '../service';
import { MODULE } from '../../../app.registry';

@injectable()
export class PostController {
  constructor(
    @inject(MODULE.POST.SERVICE)
    private readonly service: PostService,
  ) {}
}

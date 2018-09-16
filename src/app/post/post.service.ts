import { Injectable } from '@angular/core';
import * as fromPosts from '../data';

@Injectable()
export class PostService {
  getPosts = fromPosts.allPosts;
}

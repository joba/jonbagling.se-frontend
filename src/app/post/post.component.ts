import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public allPosts: Post[];
  public selectedPost: Post = null;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.allPosts = this.postService.posts;
  }

  private toggleInfo(event, post) {
    this.selectedPost = this.selectedPost === post ? null : post;
  }
}

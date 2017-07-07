import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService) { }
  private loading: boolean = true;
  private allPosts: Array<Post>;
  private activePosts: Array<Post>;
  private selectedPost: Post = null;
  private error: string;

  ngOnInit() {
  	this.postService.getPosts().subscribe(posts => {
  		this.allPosts = posts;
  	  this.loading = false;
      this.filterPosts(this.allPosts);
  	}, 
      error => {
        this.loading = false;
        this.error = "Could not load posts, please try refreshing the page.";
      });
  }

  private filterPosts(posts) {
    this.activePosts = posts.filter(post => post.live === '1');
  }

  private toggleInfo(event,post) {
    this.selectedPost = (this.selectedPost === post) ? null : post;
  }

}

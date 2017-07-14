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
  public loading: boolean = true;
  public allPosts: Array<Post>;
  private activePosts: Array<Post>;
  private inActivePosts: Array<Post>;
  private selectedPost: Post = null;
  public error: string;

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
    this.activePosts = posts.filter(post => post.live === '1' || post.live === 1);
    this.inActivePosts = posts.filter(post => post.live !== '1' && post.live !== 1);
  }

  private toggleInfo(event,post) {
    this.selectedPost = (this.selectedPost === post) ? null : post;
  }

}

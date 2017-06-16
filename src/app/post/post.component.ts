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

  ngOnInit() {
  	this.postService.getPosts().subscribe(posts => {
  		console.log(posts);
  		this.allPosts = posts;
  		this.loading = false;
  	});
  }

}

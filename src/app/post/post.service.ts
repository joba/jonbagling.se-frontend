import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  constructor(private http: Http) { }

  // private apiEndpoint = 'http://localhost:8000/index.php/api/v1';
  private apiEndpoint = 'http://188.166.119.172/backend/index.php/api/v1';

  getPosts = (): Observable<Post[]> => {
  	let postUrl = this.apiEndpoint + '/posts';

  	return this.http.get(postUrl)
  					.map((res: Response) => {
  						return res.json();
  					});
  }

}

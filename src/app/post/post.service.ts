import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PostService {
  private apiEndpoint = 'https://backend.jonbagling.se/index.php/api/v1';

  constructor(private http: Http) {}

  getPosts = (): Observable<Post[]> => {
    const postUrl = this.apiEndpoint + '/posts';

    return this.http.get(postUrl).pipe(map((res: Response) => res.json()));
  };
}

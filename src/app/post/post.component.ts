import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostsServService } from '../posts-serv.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: any;
  id!: number;
  private routeSub!: Subscription;
  
  constructor(private route: ActivatedRoute, private postsServService: PostsServService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getPostById(this.id);
    });
  }
  
  getPostById(id: number): void {
    this.postsServService.getPostById(id)
      .subscribe(post => {
        this.post = post;
      });
  }
}

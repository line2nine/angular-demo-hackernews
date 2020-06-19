import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  likes: number = 0;

  likeThis() {
    this.likes++;
  }

  dislikeThis() {
    if (this.likes > 0) {
      this.likes--;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

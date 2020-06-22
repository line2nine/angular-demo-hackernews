import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  likes: number = 0;
  dislikes: number = 0;

  likeThis() {
    if (!this.likes) {
      this.likes++;
    }
    if (this.dislikes) {
      this.dislikes--;
    }
  }

  dislikeThis() {
    if (this.likes) {
      this.dislikes++;
      this.likes--;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  isShow = true;
  btnName = 'Show';

  constructor() { }

  ngOnInit(): void {
  }

  articles = [
    {
      title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
    },
    {
      title: 'Let’s Build A Web Server. Part 1.',
      url: 'https://ruslanspivak.com/lsbaws-part1/'
    }
  ];

  addArticle() {
    const article = {
      title: (document.getElementById('artTitle') as HTMLInputElement).value,
      url: (document.getElementById('artUrl') as HTMLInputElement).value
    }

    this.articles.push(article);
  }

  toggleAddnew() {
    this.isShow = !this.isShow;
    if (this.isShow) {
      this.btnName = 'Show';
    } else {
      this.btnName = 'Hide';
    }
  }
}

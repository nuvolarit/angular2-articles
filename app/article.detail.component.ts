import {Component} from 'angular2/core';
import {Article} from "./article";

@Component({
    selector: 'my-article-detail',
    template: `
          <div *ngIf="article">
            <h2>{{article.title}} details!</h2>
            <div><label>id: </label>{{article.id}}</div>
            <div>
                <label>title: </label>
                <input [(ngModel)]="article.title" placeholder="title">
            </div>
        </div>  
      `,
    inputs: ['article']
})
export class ArticleDetailComponent {
    public article: Article;
}
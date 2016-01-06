import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Article} from "./article";
import {ArticleDetailComponent} from "./article.detail.component";
import {ArticleService} from "./article.service";

@Component({
    selector: 'my-app',
    template: `
        <h1>{{appTitle}}</h1>
        <h2>Articles</h2>
        <ul class="articles">
            <li *ngFor="#article of articles"
                [class.selected]="article === selectedArticle"
                (click)="onSelect(article)">
                <span class="badge">{{article.id}}</span> {{article.title}}
            </li>
        </ul>
        <my-article-detail [article]="selectedArticle"></my-article-detail>
        `,
    styles: [`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }
        .articles {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 10em;
        }
        .articles li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0em;
            height: 1.6em;
            border-radius: 4px;
        }
        .articles li.selected:hover {
            color: white;
        }
        .articles li:hover {
            color: #607D8B;
            background-color: #EEE;
            left: .1em;
        }
        .articles .text {
            position: relative;
            top: -3px;
        }
        .articles .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0em 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0px 0px 4px;
        }
    `],
    directives: [ArticleDetailComponent],
    providers:[ArticleService]
})
export class AppComponent implements OnInit {
    
    public appTitle = "Tour of Articles!!!";
    public articles: Article[];
    public selectedArticle: Article;
    
    constructor(private _articleService:ArticleService) { }

    getArticles() {
        this._articleService.getArticlesSlowly()
            .then(articles => this.articles = articles);        
    }

    ngOnInit() {
        this.getArticles();
    }
    
    onSelect(article: Article) { this.selectedArticle = article; }
}
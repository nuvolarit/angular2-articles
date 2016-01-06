import {Injectable} from 'angular2/core';
import {Article} from "./article";
import {ARTICLES} from "./mock.articles";

@Injectable()
export class ArticleService {
    getArticles() {
        return Promise.resolve(ARTICLES);
    }
    
    getArticlesSlowly() {
        return new Promise<Article[]>(resolve => 
            setTimeout(()=>resolve(ARTICLES), 2000)
        );
    }
}
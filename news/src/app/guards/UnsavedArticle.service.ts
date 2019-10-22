import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { CreateArticleComponent } from "../create-article/create-article.component";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root"
})
export class UnsavedArticle implements CanDeactivate<CreateArticleComponent> {
  canDeactivate(
    articleComponent: CreateArticleComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return (
      articleComponent.confirmBeforeNavigate() ||
      window.confirm("Are you sure?")
    );
  }
}

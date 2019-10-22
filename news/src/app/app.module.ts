import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth/auth.component";
import { FooterComponent } from "./footer/footer.component";
import { SourceComponent } from "./source/source.component";
import { SelectSourceComponent } from "./select-source/select-source.component";
import { FilterComponent } from "./filter/filter.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NewsService } from "./news.service";
import { NewsFeedComponent } from "./news-feed/news-feed.component";
import { CreateArticleComponent } from "./create-article/create-article.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { FilterPipe } from "../app/Pipes/filter.pipe";
import { AuthService } from "./auth.service";
import { InfoComponent } from "./info/info.component";
import { UnsavedArticle } from "./guards/UnsavedArticle.service";
import { ModifyRequestInterceptor } from "./interceptors/modify-request.interceptor";
import { AdminComponent } from "./admin/admin.component";
import { UserService } from "./services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FooterComponent,
    SourceComponent,
    SelectSourceComponent,
    FilterComponent,
    NewsFeedComponent,
    CreateArticleComponent,
    PageNotFoundComponent,
    FilterPipe,
    InfoComponent,
    AdminComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    NewsService,
    AuthService,
    UnsavedArticle,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ModifyRequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

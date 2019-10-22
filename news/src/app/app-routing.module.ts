import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateArticleComponent } from "./create-article/create-article.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SourceComponent } from "./source/source.component";
import { InfoComponent } from "./info/info.component";
import { AuthGuardService as AuthGuard } from "./auth-guard.service";
import { UnsavedArticle } from "./guards/UnsavedArticle.service";
import { AdminComponent } from "./admin/admin.component";
import { Role } from "./models/role";

const routes: Routes = [
  { path: "", component: InfoComponent },
  {
    path: "addArticle/:sourceName",
    component: CreateArticleComponent,
    canActivate: [AuthGuard],
    canDeactivate: [UnsavedArticle]
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: "newsFeed",
    component: SourceComponent,
    canActivate: [AuthGuard]
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

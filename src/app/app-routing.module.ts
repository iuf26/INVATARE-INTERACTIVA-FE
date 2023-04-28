import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { ChapterComponent } from './chapter/chapter.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SuggestedLinkComponent } from './suggested-link/suggested-link.component';

const routes: Routes = [
  {path:'', redirectTo:'welcome',pathMatch:"full"},
  {path:"welcome", component:WelcomeComponent},
  {path:"question", component:QuestionComponent},
  {path:"chapter", component:ChapterComponent},
  {path:"home", component:LandingPageComponent},
  {path:"sl", component:SuggestedLinkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

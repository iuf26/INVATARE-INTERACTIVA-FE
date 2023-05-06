import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './login/auth.component';
import { QuestionComponent } from './question/question.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GlossaryComponent } from './glossary/glossary.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'home', component: LandingPageComponent },
  { path: 'glos', component: GlossaryComponent },
  {path: "auth", component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

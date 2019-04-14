import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { FinalComponent } from './final/final.component';
import { GenderComponent } from './gender/gender.component';
import { InitialComponent } from './initial/initial.component';

const routes: Routes = [
	{
		path: 'question',
		component: QuestionComponent
	},
	{
		path: 'final',
		component: FinalComponent
	},
	{
		path: 'gender',
		component: GenderComponent
	},
	{
		path: 'initial',
		component: InitialComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

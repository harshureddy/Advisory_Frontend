import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvisorListComponent } from './advisor-list/advisor-list.component';
import { AdvisorCreateComponent } from './advisor-create/advisor-create.component';
import { AdvisorEditComponent } from './advisor-edit/advisor-edit.component';

const routes: Routes = [
  { path: 'advisors', component: AdvisorListComponent },
  { path: 'create-advisor', component: AdvisorCreateComponent },
  { path: 'edit-advisor/:id', component: AdvisorEditComponent },
  { path: '', redirectTo: '/advisors', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

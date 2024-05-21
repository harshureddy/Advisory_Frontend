import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdvisorListComponent } from './advisor-list/advisor-list.component';
import { AdvisorCreateComponent } from './advisor-create/advisor-create.component';
import { AdvisorEditComponent } from './advisor-edit/advisor-edit.component';
import { AdvisorDetailComponent } from './advisor-detail/advisor-detail.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AdvisorListComponent,
    AdvisorCreateComponent,
    AdvisorEditComponent,
    AdvisorDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

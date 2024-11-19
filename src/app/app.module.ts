import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { ParentComponent } from './parent/parent.component';
import { HighlightUrgentDirective } from './highlight-urgent.directive';

@NgModule({
  declarations: [
    AppComponent,
    TaskItemComponent,
    ParentComponent,
    HighlightUrgentDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

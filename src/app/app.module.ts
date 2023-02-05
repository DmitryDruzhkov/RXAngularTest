import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DataListComponent } from './data-list/data-list.component';
import { DataListRxComponent } from './data-list-rx/data-list-rx.component';

import { ForModule } from "@rx-angular/template/for";
import { DataListItemComponent } from './data-list-item/data-list-item.component';
import { LayerComponent } from './layer/layer.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    DataListComponent,
    DataListRxComponent,
    DataListItemComponent,
    LayerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    ForModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

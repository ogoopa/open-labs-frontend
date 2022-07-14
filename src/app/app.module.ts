import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlticciComponent } from './alticci/alticci.component';
import { AlticciCalculateService } from './alticci-calculate.service';

@NgModule({
  declarations: [
    AppComponent,
    AlticciComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AlticciCalculateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

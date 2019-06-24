import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 
//import { HttpModule } from '@angular/https'; 
import { AppComponent } from './app.component';
import { AppGroceryComponent } from './app-grocery/app-grocery.component';

@NgModule({
  declarations: [
    AppComponent,
    AppGroceryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppGroceryComponent]//[AppComponent]
})
export class AppModule { }

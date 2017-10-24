import { SignInComponent } from './signInModal/signIn.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule, MatCheckboxModule, MatInputModule } from '@angular/material'
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent, SignInComponent
  ],
  imports: [
    BrowserModule, MatButtonModule, MatDialogModule, FormsModule, ReactiveFormsModule, MatCheckboxModule, BrowserAnimationsModule, MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports : [MatButtonModule, MatDialogModule, MatCheckboxModule, MatInputModule],
  entryComponents : [SignInComponent]
})
export class AppModule { }
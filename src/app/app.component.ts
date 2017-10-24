import { SignInComponent } from './signInModal/signIn.component';
import { MatDialog } from '@angular/material';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public dialog: MatDialog) {
  }

  ShowRegisterDialog(){
    if (this.dialog.afterOpen) {
      this.dialog.closeAll();
    }
    const dialogRefRegister = this.dialog.open(SignInComponent);
    dialogRefRegister.afterClosed().subscribe(result => {});
  }
}

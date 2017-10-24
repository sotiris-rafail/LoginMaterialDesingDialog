import { MatDialog, MatDialogRef, MatCheckboxModule } from '@angular/material';
import { Component, Inject, Output, ElementRef } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
    selector: 'sign-in',
    templateUrl: './signIn.template.html',
    styleUrls: ['./signIn.style.css']
  })
  export class SignInComponent{
    login = "Είσοδος";
    private isShopperLogin : boolean = false;
    private rememberMe : boolean = false;
    constructor(private dialog : MatDialog, private dialogRef: MatDialogRef<SignInComponent>) {}

    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(EMAIL_REGEX)]);

    passwordFormControl = new FormControl('', [
        Validators.required]);


    signUpFormControl = new FormGroup({
      emailFormControl : this.emailFormControl,
      passwordFormControl : this.passwordFormControl
    });

    signInUser(email : string, password: string, source? : string) {
      alert("Email: " + email + " Password : " +password);
      this.dialog.closeAll();
    }

    shopperLogin(){
      this.isShopperLogin = !this.isShopperLogin;
    }

    rememberTheUser(){
      this.rememberMe = !this.rememberMe;
    }

    regainPasswordClicked(){
      this.dialog.closeAll();
    }

  }

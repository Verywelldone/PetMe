import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {LoginErrorStateMatcher} from "../login/login.component";
import {ErrorStateMatcher} from "@angular/material/core";


/** Error when invalid control is dirty, touched, or submitted. */
export class RegisterErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFormGroup: any;
  matcher = new RegisterErrorStateMatcher();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.registerFormGroup = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }
}

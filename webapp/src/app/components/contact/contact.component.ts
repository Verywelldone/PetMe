import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactFormGroup: any;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.contactFormGroup = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
    })
  }

}

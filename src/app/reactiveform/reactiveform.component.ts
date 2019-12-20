import { Component, OnInit } from '@angular/core';
import {    FormGroup, FormControl , Validators  } from '@angular/forms';
import {    UsernameValidators } from '../username.validators';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myform = new FormGroup ({
    'username': new FormControl('',[
      Validators.required,
      UsernameValidators.cannotContainSpace,
    ]),
    'password':new FormControl('',[
    Validators.required,
    Validators.minLength(5),
    Validators.pattern('[A-Z]*'),
    ]),
    'email': new FormControl("",[
      Validators.required,
    ]),
    'category':new FormControl('',Validators.required),
  });

  get password(){
    return this.myform.get('password');
  }

  get category(){
    return this.myform.get('category');
  }

  get email(){
    return this.myform.get('email');
  }

}

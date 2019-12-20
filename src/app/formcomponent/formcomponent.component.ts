import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.css']
})
export class FormcomponentComponent implements OnInit {
data;
  constructor() { }

  ngOnInit() {
  }

  log(username){
    console.log(username);
  }

  submit(f){
    console.log(f);
    this.data = f;
  }

}

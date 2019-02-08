import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  registerForm : FormGroup = new FormGroup({
    userName : new FormControl(""),
    address : new FormControl(""),
    mail : new FormControl(""),
    mobile : new FormControl(""),

  });

  get UserName(){
    return this.registerForm.get("userName");
  }

  get Address(){
    return  this.registerForm.get("address");
  }

  get mail(){
    return this.registerForm.get("mail");
  }

  get mobile(){
    return this.registerForm.get("mobile");
  }


  constructor() { }

  ngOnInit() {
  }

}

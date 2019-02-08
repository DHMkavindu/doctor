import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  scheduleForm : FormGroup = new FormGroup({
    cmbdoctorId : new FormControl(""),
    name : new FormControl(""),
    mobile : new FormControl(""),
    specaility : new FormControl(""),
    hospital : new FormControl(""),
    scheduleId : new FormControl(""),
    cmbday : new FormControl(""),
    Time : new FormControl(""),
    Count : new FormControl("")

  });

  get doctorId(){
    return this.scheduleForm.get("cmbdoctorId");
  }

  get doctorName(){
    return this.scheduleForm.get("name");
  }

  get doctorMobile(){
    return this.scheduleForm.get("mobile");
  }

  get doctorSpecaility(){
    return this.scheduleForm.get("specaility");
  }
  
  get hospital(){
    return this.scheduleForm.get("hospital");
  }

  get scheduleId(){
    return this.scheduleForm.get("scheduleId");
  }

  get Day(){
    return this.scheduleForm.get("cmbday");
  }

  get Time(){
    return this.scheduleForm.get("Time");
  }

  get PatientCount(){
    return this.scheduleForm.get("Count");
  }


 

  constructor() { }

  ngOnInit() {
  }

}

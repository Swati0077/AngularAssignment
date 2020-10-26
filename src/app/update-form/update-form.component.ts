
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap,  Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Users } from '../users/user.model';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  userId: string;
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  phonenumber: string;
  role: string;
  address: string;
  updateUserData: Users;
  createdOn: Date;
  modifiedOn: Date;

  Uid: string;
  fname: string;
  mname: string;
  lname: string;
  Uemail: string;
  Uphonenumber: string;
  Urole: string;
  Uaddress: string;

  constructor(private service: ServiceService, private router: ActivatedRoute, private router1: Router) { }

  updateUser(): void{
    this.Uid = this.userId;
    this.fname = this.firstname;
    this.mname = this.middlename;
    this.lname = this.lastname;
    this.Uemail = this.email;
    this.Uphonenumber = this.phonenumber;
    this.Urole = this.role;
    this.Uaddress = this.address;

    const data: Users = {
      id: this.Uid,
      firstname: this.fname,
      middlename: this.mname,
      lastname: this.lname,
      email: this.Uemail,
      phonenumber: this.Uphonenumber,
      role: this.Urole,
      address: this.Uaddress,
      created_on: this.createdOn,
      modified_on: this.modifiedOn
      };
    this.service.updateData(this.Uid, data);
    this.router1.navigate(['/userdata']);
  }

  onCancel(): void{
    this.router1.navigate(['/userdata']);
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')){
        this.userId = paramMap.get('id');
        this.updateUserData = this.service.findUserData(this.userId);
        console.log(this.updateUserData.firstname);

        // set update data to the form

        this.firstname = this.updateUserData.firstname;
        this.middlename = this.updateUserData.middlename;
        this.lastname = this.updateUserData.lastname;
        this.email = this.updateUserData.email;
        this.address = this.updateUserData.address;
        this.role = this.updateUserData.role;
        this.phonenumber = this.updateUserData.phonenumber;
        this.createdOn = this.updateUserData.created_on;

      }

});
  }
}

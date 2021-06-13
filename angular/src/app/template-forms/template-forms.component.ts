import { Component, OnInit } from '@angular/core';

import { User } from './../user'

import { AppService } from '../services/app.service';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})

export class TemplateFormsComponent implements OnInit {
  panelOpenState = false;
  usersList : Array<User>= []

  user : User = {
    _id: '',
    name: '',
    surname: '', 
    age: '', 
    dni: '',
    birthday: '', 
    color: '',
    gender: ''
  }

  position : number = 0
  action   : string = 'insert'

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void { 
    this.chargeGetUsers()
  }



  registerUser() : void {
    if( this.action === 'insert'){
      console.log('this.user', this.user)
      this.appService.createUser(this.user).subscribe((user) => (this.usersList.push(user)));
      this.chargeGetUsers(); 
    }else{
      this.usersList[this.position] = this.user
    }
    this.user = {
      _id: '',
      name: '',
      surname: '', 
      age: '', 
      dni: '',
      birthday: '', 
      color: '',
      gender: '',
    }
   }

  edit( editPosition : number ) : void {
    this.user  = this.usersList[editPosition]
    this.action   = 'edit'
    this.position = editPosition
    this.appService.updateUser(this.user).subscribe((user) => (this.user  = this.usersList[editPosition]));
  }

  delete( deletePosition : number ) :void {
    this.appService.deleteUser(this.usersList[deletePosition]).subscribe();
    this.chargeGetUsers(); 
  }
  
  chargeGetUsers(): void {
    this.appService.getUsers().subscribe((AppUsers) => (this.usersList = AppUsers))
  }
}

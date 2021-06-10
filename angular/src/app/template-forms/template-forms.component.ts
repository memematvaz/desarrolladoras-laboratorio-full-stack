import { Component, OnInit } from '@angular/core';

import { User } from './../user'

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})

export class TemplateFormsComponent implements OnInit {
  panelOpenState = false;
  usersList : Array<User>= []

  user : User = {
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

  constructor() { }

  ngOnInit(): void { }

  registerUser() : void {

    if( this.action === 'insert'){
      this.usersList.push( this.user )
      
    }else{
      this.usersList[this.position] = this.user
    }

    this.user = {
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
  }
  delete( deletePosition : number ) :void {
    this.usersList.splice( deletePosition , 1 )
  }
}


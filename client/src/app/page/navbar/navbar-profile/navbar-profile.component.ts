import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-profile',
  templateUrl: './navbar-profile.component.html',
  styleUrls: ['./navbar-profile.component.scss']
})
export class NavbarProfileComponent implements OnInit {
  avatar:string = "assets/img/navbar-symbol-mob.png";
  name:string = "Name";
  surname:string = "Surname";
  notificarionsNumber:number = 7;
  constructor() { }

  ngOnInit() {
  }

}

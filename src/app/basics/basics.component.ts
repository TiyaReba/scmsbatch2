import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {
  myName="Tiya"
  fname:any;
  hide=false;
  arra=["Tiya","Maya","John"]


  constructor() { }

  ngOnInit(): void {
  }

}

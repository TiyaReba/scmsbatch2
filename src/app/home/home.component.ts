import { Component, OnInit } from '@angular/core';
import { ProserService } from '../proser.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any;
  constructor(private serve:ProserService) { }

  ngOnInit(): void {
    this.serve.getProducts().subscribe((res)=>{
      console.log(res)
      this.products =res;
      
    })
  }

}

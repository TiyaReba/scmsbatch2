import { Component, OnInit } from '@angular/core';
import { ProserService } from '../proser.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
buttoncontroller =true
  constructor(private serve:ProserService) { }
productModel={
  // id:'',
  productName:'',
  productquantity:'',
  productPrice:''
}
  ngOnInit(): void {
  }
  addPro(){
    console.log(this.productModel)
   this.serve.addProducts(this.productModel).subscribe() 
   

  }
}

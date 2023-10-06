import { Injectable } from '@angular/core';
 import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProserService {

  constructor(private http:HttpClient) { }
  getProducts(){
    // return this.http.get(''https://dummyjson.com/products)
    return this.http.get('http://localhost:3000/products');
  }
   
  addProducts(data:any){
    return this.http.post<any>('http://localhost:3000/products',data)
  }
}

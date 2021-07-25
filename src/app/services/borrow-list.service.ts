import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BorrowListService {

  constructor(private http: HttpClient) { 
  }
  getDataFromLumen(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get("http://localhost:8000/api/borrower-list").subscribe( data => {
        resolve(data);
      },err=> {
        reject(err);
      });
    });
  }

  insertDataFromLumen(b_name, b_title, rented, b_price, b_status) {
    const data = {
      b_name: b_name,
      b_title: b_title,
      rented: rented,
      b_price: b_price,
      b_status: b_status
    };
    this.http.post("http://localhost:8000/api/borrower-list", data).subscribe( data => {
    console.log(data);
  }, err =>
  console.log(data)
  );
}
  updateDataFromLumen(id, b_status){
    const data = {
      b_status: b_status
    };
    this.http.put("http://localhost:8000/api/borrower-list/" +id , data).subscribe( data => {
      console.log('true');
    }, err =>
    console.log('failed')
    );
  }
  
  // deleteDataFromLumen(id, b_name, b_title, rented, b_price, b_status){
  //   const data = {
  //     b_name: b_name,
  //     b_title: b_title,
  //     rented: rented,
  //     b_price: b_price,
  //     b_status: b_status
  //   };
  //   this.http.delete("http://localhost:8000/api/borrower-list/" +id , data).subscribe( data => {
  //     console.log('true');
  //   }, err =>
  //   console.log('failed')
  //   );
  // }
}

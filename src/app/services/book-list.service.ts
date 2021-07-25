import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookListService {

  constructor(private http: HttpClient) {  
   }

  getDataFromLumen(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get("http://localhost:8000/api/book-list").subscribe( data => {
        resolve(data);
      },err=> {
        reject(err);
      });
    });
  }

  insertDataFromLumen(title, author, price, status) {
      const data = {
        title: title,
        author: author,
        price: price,
        status: status
      };
      this.http.post("http://localhost:8000/api/add-book", data).subscribe( data => {
      console.log('true');
    }, err =>
    console.log('failed')
    );
  }

  updateDataFromLumen(id, title, author, price, status){
    const data = {
      title: title,
      author: author,
      price: price,
      status: status
    };
    this.http.put("http://localhost:8000/api/book-list/" +id , data).subscribe( data => {
      console.log('true');
    }, err =>
    console.log('failed')
    );

  }

  deleteDataFromLumen(id){
    this.http.delete("http://localhost:8000/api/book-list/" +id).subscribe( data => {
      console.log('true');
    }, err =>
    console.log('failed')
    );

  }


  // deleteDataFromLumen(id, title, author, price, status){
  //   const data = {
  //     title: title,
  //     author: author,
  //     price: price,
  //     status: status
  //   };
  //   this.http.delete("http://localhost:8000/api/borrower-list/" +id , data).subscribe( data => {
  //     console.log('true');
  //   }, err =>
  //   console.log('failed')
  //   );
  // }

  // deleteUser(id): Observable<User[]> {
  //   return this.httpClient.delete<User[]>(this.endpoint + '/' + id, this.httpOptions)
  //     .pipe(
  //       tap(_ => console.log(`User deleted: ${id}`)),
  //       catchError(this.handleError<User[]>('Delete user'))
  //     );
  // }

}

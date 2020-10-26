import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Users } from './users/user.model';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  userData: Users[] = [];
  private updatedUser = new Subject<Users[]>();

  constructor(private http: HttpClient) { }

  getUpdatedUser(): Observable<Users[]>{
    return this.updatedUser.asObservable();
  }

  getData(): void{
    this.http.get('http://localhost:5000/user').subscribe((data: Users[]) => {
      this.userData = data;
      this.updatedUser.next([...this.userData]);
    });
  }

  deleteData(id: string): void{
    this.http.delete('http://localhost:5000/user/delete/' + id).subscribe(() => {
      const updated = this.userData.filter(data => data.id !== id);
      this.userData = updated;
      this.updatedUser.next([...this.userData]);
    });
  }
  updateData(id: string, data: Users): void{
    this.http.patch('http://localhost:5000/user/edit/' + id, data).subscribe((dataa: Users) => {
      console.log(dataa);
    });
  }
  findUserData(id: string): Users{
    console.log(this.userData);
    return {...this.userData.find(p => p.id == id)};
  }

}

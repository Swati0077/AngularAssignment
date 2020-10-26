
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Users } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: Users[] = [];
  isEdit = true;

  constructor(private service: ServiceService, private router: Router) { }

  deleteRow(id: string): void{
    this.service.deleteData(id);
  }
  updateRow(id): void{
    this.isEdit = false;
    this.router.navigate(['/updateData/' + id]);
  }
  onRefresh(): void{
    this.router.navigate(['/userdata']);
  }
  cancelRow(): void{
    this.isEdit = true;
  }

  ngOnInit(): void {
    this.service.getData();
    this.service.getUpdatedUser().subscribe((data: Users[]) => {
      this.user = data;
      console.log(this.user);
    });
  }
}

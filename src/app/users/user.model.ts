import { Time } from '@angular/common';
import { Timestamp } from 'rxjs';

export interface Users{
    id: string;
    firstname: string;
    middlename: string;
    lastname: string;
    email: string;
    phonenumber: string;
    role: string;
    address: string;
    created_on: Date;
    modified_on: Date;
}

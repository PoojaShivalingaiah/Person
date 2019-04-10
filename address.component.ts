import { Component, OnInit } from '@angular/core';
import { Address } from '../api/user';  
import { Observable } from 'rxjs/Rx';
import { MySqlService } from '../services/mysql.service';
import { Pipe, PipeTransform  } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  providers:[MySqlService],
})
export class AddressComponent implements OnInit {

  user:any = [];  

  constructor(private _mySqlService: MySqlService,private _http: HttpClient){
   
  }
  data :any = [];
ngOnInit() { 
  this._http.get<Address[]>('http://localhost:4600/getAddress').subscribe(
    data => {
      this.data = data;
      console.log(this.data);
  },
  (err: HttpErrorResponse) => {
    if (err.error instanceof Error) {
      console.log("Client-side error occured.");
    } else {
      console.log("Server-side error occured.");
    }
  });
// this._mySqlService.getDataObservable(this.getUrl).subscribe(
//   data => {
//     this._mySqlService = data;
//     this.source.load(data);
//     console.log(this.source)
//   }
// ); 
}  

 source: LocalDataSource = new LocalDataSource();
// errorMessage: string;

 
  settings = {
    actions: { 
      position: 'right' 
    },
    pager: {
      display: true,
      perPage: 5,
    },
    delete: {
      confirmDelete: true,
      deleteButtonContent: 'Delete',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel',
    },
    add: {
      confirmCreate: true,
    },
    edit: {
      confirmSave: true,
      
    },
    position: 'right',
    columns: {
      id: {
        title: 'ID',
      },
      city: {
        title: 'City'
      },
      line1: {
        title: 'Line1'
      },
      line2: {
        title: 'Line2'
      },
      line3: {
        title: 'Line3'
      },
      pincode: {
        title: 'Pincode'
      },
      state: {
        title: 'State',
        width: 25
      },
      clientDetails_id: {
        title: 'Client Details Id'
      },
      country_id: {
        title: 'Country Id',
        width: 25
      },
      person_id: {
        title: 'Person Id'
      },
    },
    attr: {
      class: 'table table-bordered table-hover table-striped'
    },
  };

  onDeleteConfirm(event) {
    this._http.post<any>('http://localhost:4600/deleteAddress',event.data).subscribe(
        res => {
          console.log(res);
          event.confirm.resolve(event.source.data);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      });
  }

  onCreateConfirm(event) {
	this._http.post<Address>('http://localhost:4600/saveAddress', event.newData).subscribe(
        res => {
          console.log(res);
          event.confirm.resolve(event.newData);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      });

  }

  onSaveConfirm(event) {
  this._http.post<Address>('http://localhost:4600/updateAddress', event.newData).subscribe(
        res => {
          console.log(res);
          event.confirm.resolve(event.newData);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      });
  }

}

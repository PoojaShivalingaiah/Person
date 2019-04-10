import { Component, OnInit } from '@angular/core';
import { Country } from '../api/user';  
import { Observable } from 'rxjs/Rx';
import { MySqlService } from '../services/mysql.service';
import { Pipe, PipeTransform  } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers:[MySqlService],
})
export class CountryComponent implements OnInit {

  user:any = [];  

  constructor(private _mySqlService: MySqlService,private _http: HttpClient){
   
  }
  data :any = [];
ngOnInit() { 
  this._http.get<Country[]>('http://localhost:4600/getCountry').subscribe(
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
      countryCode: {
        title: 'Country Code'
      },
      countryName: {
        title: 'Country Name'
      },
      phoneCode: {
        title: 'phoneCode'
      },
    },
    attr: {
      class: 'table table-bordered table-hover table-striped'
    },
  };

  onDeleteConfirm(event) {
    this._http.post<any>('http://localhost:4600/deleteCountry',event.data).subscribe(
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
	this._http.post<Country>('http://localhost:4600/saveCountry', event.newData).subscribe(
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
  this._http.post<Country>('http://localhost:4600/updateCountry', event.newData).subscribe(
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

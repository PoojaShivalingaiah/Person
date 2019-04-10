import { Component, OnInit } from '@angular/core';
import { PersonJD} from '../api/user';  
import { Observable } from 'rxjs/Rx';
import { MySqlService } from '../services/mysql.service';
import { Pipe, PipeTransform  } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-person-jd-details',
  templateUrl: './person-jd-details.component.html',
  styleUrls: ['./person-jd-details.component.css'],
  providers:[MySqlService],
})
export class PersonJdDetailsComponent implements OnInit {

  constructor(private _mySqlService: MySqlService, private _http: HttpClient) {

  }
  data: any = [];
  ngOnInit() {
    this._http.get<PersonJD[]>('http://localhost:4600/getPersonJD').subscribe(
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
      person_id: {
        title: 'Person ID',
      },
      jd_id: {
        title: 'JD ID'
      },
    },
    attr: {
      class: 'table table-bordered table-hover table-striped'
    },
  };

  onDeleteConfirm(event) {
    this._http.post<any>('http://localhost:4600/deletePersonJD', event.data).subscribe(
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
    this._http.post<PersonJD>('http://localhost:4600/savePersonJD', event.newData).subscribe(
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
    this._http.post<PersonJD>('http://localhost:4600/updatePersonJD', event.newData).subscribe(
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

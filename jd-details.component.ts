import { Component, OnInit } from '@angular/core';
import { JdDetails } from '../api/user';  
import { Observable } from 'rxjs/Rx';
import { MySqlService } from '../services/mysql.service';
import { Pipe, PipeTransform  } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-jd-details',
  templateUrl: './jd-details.component.html',
  styleUrls: ['./jd-details.component.css'],
  providers:[MySqlService],
})
export class JdDetailsComponent implements OnInit {

  
  constructor(private _mySqlService: MySqlService,private _http: HttpClient){
   
  }
  data :any = [];
ngOnInit() { 
  this._http.get<JdDetails[]>('http://localhost:4600/getJD').subscribe(
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
      colseTime: {
        title: 'Colse Time'
      },
      communicationDetails: {
        title: 'Communication Details'
      },
      createdDate: {
        title: 'Created Date'
      },
      description: {
        title: 'Description'
      },
      exp: {
        title: 'Exp'
      },
      jddetails: {
        title: 'Jd Details'
      },
      requiredSkills: {
        title: 'Required Skills'
      },
      title: {
        title: 'Title'
      },
      clientDetails_id: {
        title: 'ClientDetails ID'
      },
    },
    attr: {
      class: 'table table-bordered table-hover table-striped'
    },
  };

  onDeleteConfirm(event) {
    this._http.post<any>('http://localhost:4600/deleteJD',event.data).subscribe(
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
	this._http.post<JdDetails>('http://localhost:4600/saveJD', event.newData).subscribe(
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
    this._http.post<JdDetails>('http://localhost:4600/updateJD', event.newData).subscribe(
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

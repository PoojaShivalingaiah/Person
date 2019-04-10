import { Component, OnInit} from '@angular/core';
import { Person } from '../api/user';  
import { Observable } from 'rxjs/Rx';
import { MySqlService } from '../services/mysql.service';
import { Pipe, PipeTransform  } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Pipe({ name: 'values',  pure: false })
export class ValuesPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return Object.keys(value).map(key => value[key]);
  }
}


@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css'],
  providers:[MySqlService],
})
export class PersonInfoComponent implements OnInit{
  user:any = [];  

  constructor(private _mySqlService: MySqlService,private _http: HttpClient){
   
  }
  data :any = [];
ngOnInit() { 
  this._http.get<Person[]>('http://localhost:4600/getallUsers').subscribe(
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
      aadhaar: {
        title: 'Aadhaar'
      },
      byEmail: {
        title: 'By Email'
      },
      byPhone: {
        title: 'By Phone'
      },
      cctc: {
        title: 'CCTC'
      },
      contactNo: {
        title: 'Contact No'
      },
      createdDate: {
        title: 'Created  Date',
        width: 25
      },
      ectc: {
        title: 'ECTC'
      },
      email: {
        title: 'Email',
        width: 25
      },
      expMM: {
        title: 'Exp (MM)'
      },
      expYY: {
        title: 'Exp (YY)'
      },
      fresher: {
        title: 'Fresher?'
      },
      lastContactOn: {
        title: 'Last Contact On'
      },
      lastUpdatedDate :{
        title: 'last updated date'
      },
      name: {
        title: 'Name'
      },
      overallFeedback: {
        title: 'Overall Feedback'
      },
      pan: {
        title: 'PAN'
      },      
      passportNumber: {
        title: 'Passport Number'
      },
      skill: {
        title: 'Skill'
      },
      validTo: {
        title: 'valid To'
      },
    },
    attr: {
      class: 'table table-bordered table-hover table-striped'
    },
  };

  onDeleteConfirm(event) {
    this._http.post<any>('http://localhost:4600/deleteUsers',event.data).subscribe(
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
	this._http.post<Person>('http://localhost:4600/saveUser', event.newData).subscribe(
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
  this._http.post<Person>('http://localhost:4600/updateUser', event.newData).subscribe(
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

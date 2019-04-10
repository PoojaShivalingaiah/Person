import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
    templateUrl: 'login.component.html'
})

export class LoginComponent {
    constructor(public router: Router){}
      login(a:string,b:string) {
          console.log(a+""+b)
        var name:string = 'admin';
        var pwd: string = 'admin';
        var path:string= '';
        if(a == name && b == pwd){
            this.router.navigate(['/dashboard']);
            console.log(path);
        }
        else {
            
            var msg: string = 'Please Check UserName and Password '
            alert(msg)
            this.router.navigate(['/login']);
           
        }
      }
}

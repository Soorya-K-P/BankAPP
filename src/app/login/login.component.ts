import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your perfect banking partner";

  account="Enter ur account here";

  acno='';

  pswd='';

  // database
  userDetails:any={
    1000:{acno:1000,username:"Soorya",password:1000,balance:1000},
    1001:{acno:1001,username:"Anju",password:1001,balance:1000},
    1002:{acno:1002,username:"Maya",password:1002,balance:1000},
  }


  constructor() { }

  ngOnInit(): void {
  }

  acnoChange(event:any)
  {
    console.log(event);
    this.acno=event.target.value;
    console.log(this.acno);
    
  }

  pswdChange(event:any)
  {
    this.pswd=event.target.value;
    console.log(this.pswd);
    
  }

  // login(){
  //   // alert('Login clicked')
  //   var acno=this.acno;
  //   var pswd=this.pswd;
  //   var userDetails=this.userDetails;

  //   if(acno in userDetails){
  //     if(pswd==userDetails[acno]['password']){
  //       alert('Login successful');
  //     }
  //     else{
  //       alert('Invalid password')
  //     }
  //   }
  //   else{
  //     alert('Invalid user details')
  //   }
  // }

  
  login(a:any,p:any){
    // alert('Login clicked')
    var acno=a.value;
    var pswd=p.value;
    var userDetails=this.userDetails;

    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        alert('Login successful');
      }
      else{
        alert('Invalid password')
      }
    }
    else{
      alert('Invalid user details')
    }
  }

}

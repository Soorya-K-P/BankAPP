import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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

//dependancy injection

  constructor(private ds:DataService,private router:Router) { }

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

  login(){
    // alert('Login clicked')
    var acno=this.acno;
    var pswd=this.pswd;
    var userDetails=this.ds.userDetails;
    const result=this.ds.login(acno,pswd)
    if(result){
      alert('Login successful');
      this.router.navigateByUrl('dashboard')
    }
    else{
      alert('Login failed')
    }





  // login(a:any,p:any){
  //   // alert('Login clicked')
  //   var acno=a.value;
  //   var pswd=p.value;
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

}
}

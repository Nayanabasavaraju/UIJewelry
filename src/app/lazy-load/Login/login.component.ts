import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { dataService } from 'src/app/base/services/jewelry.service';
import { environment } from 'src/environments/environment';
declare var Pace: any;
declare var $: any;
declare var jQuery: any;
declare var window: any;
export interface Credentials {
  user_name: string,
  password: string,
  company_code: string
}

@Component({
  selector: 'vo-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoading = false;
  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    remember: []
  });
  ipAddress: any;
  loginResponse: Object | undefined;
  bLogin: boolean = true;
  bRole: boolean = false;
  
  constructor(private router: Router,private server : dataService,
    public formBuilder: FormBuilder, public aroute: ActivatedRoute, public el: ElementRef) {

  }

  @ViewChild('idusername') public elementRef: ElementRef<any> | any;
  public securityQuestions: any;

  ngOnInit() {
    
  }



  ngAfterViewInit() {
    this.elementRef.nativeElement.focus();
    $('body').addClass('body-login');
    $('body').addClass('login_bg');


  }
  
  login(val: any) {
    this.isLoading = true;
    
    
    // var checkdomain = val.username.includes("@starmarkit.com");
    // if (!checkdomain)
    //   val.username += "@starmarkit.com";

    // this.loginForm.controls.username.patchValue(val.username);
    // console.log("added @", val.username);
    // // var regex = /\b@starmarkit.com\b/gi;
    // // var found = val.username.match(regex);
    // var obj = {
    //   "loginid": val.username,
    //   "password": val.password,
    //   "appname": "VitalSearch",
    //   "appversion": "1.0",
    //   "ip": this.ipAddress
    // }
    // let objs = btoa(JSON.stringify(obj))
    // // localStorage.setItem("userdata", objs)
    // // this.router.navigate(['/home/dashboard'])
    // // return
    this.server.login(val.username,val.password).subscribe(data => {
      console.log("login Data",data);
      if (data != null) {
        this.bLogin = true;
        //localStorage.setItem("id_token", data.token);
        //localStorage.setItem("user_name", data['userinfo'].formattedDisplayName);
        localStorage.setItem('user_name', data.firstName + " " + data.lastName);
        localStorage.setItem('userid',data.id);
        this.router.navigate(['/jewelry/dashboard']);
      } else {
        console.info("error");
        
        this.isLoading = false;
        this.bLogin = false;
        // this._snackBar.open("Invalid Username or Password", 'Alert');
      }
    })
  }

  

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: []
    });
  }
}












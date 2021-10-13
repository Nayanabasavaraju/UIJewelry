
import { Component, ViewChild, ElementRef, ChangeDetectorRef, HostListener } from '@angular/core';
import { NgForm, FormGroup, FormArray, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn, FormsModule, ReactiveFormsModule, RequiredValidator } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
declare var $: any;
declare var jQuery: any;
declare var window: any;

@Component({
  selector: 'srs-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']

})

export class LayoutComponent {
  username: string | any;
  roleName: any;
  constructor(public router: Router,) {

  }
  ngOnInit(): void {    
    this.username = localStorage.getItem("user_name");
  }

  ngAfterViewInit() {
    //$('#aside').addClass('folded')
    $('body').removeClass('body-login');
    $('body').removeClass('login_bg');
    document.body.style.backgroundImage = '';
    document.body.style.backgroundColor = 'background-color: #fafafa !important;';
  }
  logout() {

    this.router.navigate(['login'])
  }

}
    

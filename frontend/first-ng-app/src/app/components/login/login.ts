import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from '../../services/client';
import { ExternalUser } from '../../model/class/ExternalUser';
import { IAPILoginResponse } from '../../model/interface/roles';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: '/login.html',
  styles: ``
})
export class Login implements OnInit {

  loginForm: FormGroup = new FormGroup({})
  fb = inject(FormBuilder)
  cs = inject(ClientService)
  r = inject(Router)

  ngOnInit(): void {
      this.loginForm = this.fb.group({
        username: [''],
        password: [''],
        desg: ['']
      })
  }

  onLogin(){
    const extUser: ExternalUser = this.loginForm.value
    console.log(extUser)
    this.cs.loginUser(extUser).subscribe((res: IAPILoginResponse)=>{
      this.r.navigate(['layout'])
    })
  }



}

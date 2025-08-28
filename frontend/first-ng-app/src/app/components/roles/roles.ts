import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IRoles, IAPIRolesResponse } from '../../model/interface/roles';
import { MasterService } from '../../services/master';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl:'./roles.html',
  styles: ``
})

export class Roles implements OnInit {

  http = inject(HttpClient);
  cdr = inject(ChangeDetectorRef);
  ms = inject(MasterService);

  roleList: IRoles[] = [];

  ngOnInit() {
    this.ms.getRoles()
      .subscribe((res: IAPIRolesResponse) => {
        this.roleList = res.data;
        console.log('Role list:', this.roleList);
        this.cdr.detectChanges(); 
      });
  }
}
import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl:'./roles.html',
  styles: ``
})

export class Roles implements OnInit {
  roleList: any[] = [];
  http = inject(HttpClient);
  cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    this.http.get<any>('http://localhost:4202/api/roles')
      .subscribe(res => {
        this.roleList = res.data;
        console.log('Role list:', this.roleList);
        this.cdr.detectChanges(); // 👈 force Angular to update UI
      });
  }
}
import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master';

@Component({
  selector: 'app-designation',
  imports: [],
  template: `
    <p>
      designation works!
    </p>
  `,
  styles: ``
})
export class Designation implements OnInit {

  ms = inject(MasterService)

  ngOnInit(): void {
    this.ms.getDesignations().subscribe(res=>{
      console.log(res)
    })
  }

}

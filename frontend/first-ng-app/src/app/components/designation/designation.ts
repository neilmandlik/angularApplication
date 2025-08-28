import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { MasterService } from '../../services/master';
import { IAPIDesignationsResponse, IDesignations } from '../../model/interface/roles';
@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designations.html',
  styles: ``
})
export class Designation implements OnInit {

  ms = inject(MasterService)
  cdr = inject(ChangeDetectorRef)

  designationList:IDesignations[]=[]
  isLoading: boolean = true;

  ngOnInit(): void {
    this.ms.getDesignations().subscribe((res: IAPIDesignationsResponse)=>{
      this.designationList = res.data;
      this.isLoading = false;
      this.cdr.detectChanges();
    })
  }

}

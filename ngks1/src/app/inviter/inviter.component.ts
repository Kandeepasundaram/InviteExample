import { Component, OnInit } from '@angular/core';
import { GatewayService } from '../gateway.service';
import { Datum, GetFamilyResponse } from '../model/GetFamily';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inviter',
  templateUrl: './inviter.component.html',
  styleUrls: ['./inviter.component.scss']
})
export class InviterComponent implements OnInit {
  constructor(private gateway: GatewayService) {}
  dataArray: Datum[];


  ngOnInit() {
    this.gateway.getFamilyDetails().subscribe(getFamilyResponse => {
      this.dataArray = getFamilyResponse.data;
    });
  }

}

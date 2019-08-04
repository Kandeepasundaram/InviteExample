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
  constructor(private gateway: GatewayService, private formBuilder: FormBuilder) {}
  dataArray: Datum[];
  inviterDetails: FormArray;

  inviteeForm = new FormGroup({
    inviterDetails: this.formBuilder.array([])
  });

  ngOnInit() {
    this.gateway.getFamilyDetails().subscribe(getFamilyResponse => {
      this.dataArray = getFamilyResponse.data;
      this.dataArray.forEach(element => {
        this.addInvitee(element.uniqueId);
      });
    });
  }

  createInvitee(uniqueId): FormGroup {
    return this.formBuilder.group({
      uniqueId: new FormControl(uniqueId),
      emailAddress: new FormControl(''),
      isSubDelegateEnable: new FormControl(false),
      isDelegateEnable: new FormControl(false)
    });
  }

  addInvitee(uniqueId): void {
    this.inviterDetails = this.inviteeForm.get('inviterDetails') as FormArray;
    this.inviterDetails.push(this.createInvitee(uniqueId));
  }

  onSubmit(art) {
    let test = this.inviterDetails.value[art];
    console.log(JSON.stringify(test));

    console.log('Submitted');
  }
}

import { Component, OnInit, Input } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { Datum } from "src/app/model/GetFamily";

@Component({
  selector: "app-left",
  templateUrl: "./left.component.html",
  styleUrls: ["./left.component.scss"]
})
export class LeftComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  @Input() dataArray: Datum[];
  inviterDetails: FormArray;

  inviteeForm = new FormGroup({
    inviterDetails: this.formBuilder.array([])
  });

  createInvitee(uniqueId): FormGroup {
    return this.formBuilder.group({
      uniqueId: new FormControl(uniqueId),
      emailAddress: new FormControl(""),
      isSubDelegateEnable: new FormControl(false),
      isDelegateEnable: new FormControl(false)
    });
  }

  addInvitee(uniqueId): void {
    this.inviterDetails = this.inviteeForm.get("inviterDetails") as FormArray;
    this.inviterDetails.push(this.createInvitee(uniqueId));
  }

  ngOnInit() {
    this.dataArray.forEach(element => {
      this.addInvitee(element.uniqueId);
    });
  }

  onSubmit(art) {
    let test = this.inviterDetails.value[art];
    console.log(JSON.stringify(test));

    console.log("Submitted");
  }
}

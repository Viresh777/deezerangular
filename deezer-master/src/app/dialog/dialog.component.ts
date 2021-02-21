import { Component, OnInit, Inject } from '@angular/core';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent {
  navigate_url: string =""
  title: string =""
  message: string = ""
  ButtonText = "Ok"
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private router: Router,
    private dialogRef: MatDialogRef<DialogComponent>) {
    if (data) {
      this.title = data.title || this.title;
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.ButtonText = data.buttonText.cancel || this.ButtonText;
      }
    }
    this.dialogRef.updateSize('600vw','600vw')
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

  clickOK(){
    this.router.navigate([this.navigate_url])
  }

}
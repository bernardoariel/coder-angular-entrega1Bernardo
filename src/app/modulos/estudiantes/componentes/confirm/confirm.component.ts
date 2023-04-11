import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ListComponent } from 'src/app/modulos/estudiantes/list/list.component';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialogRef:MatDialogRef<ListComponent>) {}
  guardar(){

   this.dialogRef.close(true)

  }
}

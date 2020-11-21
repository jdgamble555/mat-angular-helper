import { NgModule } from '@angular/core';
import { MatAngularHelperComponent } from './mat-angular-helper.component';
import { ConfirmDialogComponent } from './material/confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [MatAngularHelperComponent, ConfirmDialogComponent],
  imports: [
  ],
  exports: [MatAngularHelperComponent]
})
export class MatAngularHelperModule { }

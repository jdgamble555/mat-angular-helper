import { NgModule } from '@angular/core';
import { MatAngularHelperComponent } from './mat-angular-helper.component';
import { SanitizeHtmlPipe } from './angular/sanitize-html.pipe';


@NgModule({
  declarations: [MatAngularHelperComponent, SanitizeHtmlPipe],
  exports: [MatAngularHelperComponent]
})
export class MatAngularHelperModule { }

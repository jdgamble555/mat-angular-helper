import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  DEBUG = false;

  constructor(private snackBar: MatSnackBar, private zone: NgZone) { }
  /**
   * Shows a snackbar message
   * @param msg message to display
   */
  showMsg(msg: string): void {
    // fix close bug
    this.zone.run(() => {
      this.snackBar.open(msg, 'Close', {
        duration: 5000
      });
    });
  }
  /**
   * Replaces variables and shows snackbar message
   * @param msg message with {0} in it
   * @param v varible to replace
   */
  replaceMsg(msg: string, v: string): void {
    const sFormat = (str: string, ...args: string[]) => str.replace(/{(\d+)}/g, (match, index) => args[index] || '');
    this.showMsg(sFormat(msg, v));
  }
  /**
   * Shows error snackbar message
   * @param msg error message
   */
  showError(msg: string): void {
    if (this.DEBUG) {
      console.error(msg);
    }
    // fix close bug
    this.zone.run(() => {
      this.snackBar.open(msg, 'Close', {
        duration: 5000,
        panelClass: ['ng-error']
      });
    });
  }
}
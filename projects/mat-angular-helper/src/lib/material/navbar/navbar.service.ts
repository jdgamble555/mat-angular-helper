import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  crumbs!: any;

  private leftNav!: MatSidenav;
  private rightNav!: MatSidenav;

  readonly root = "directory/category";

  constructor(private router: Router) { }

  setLeftNav(leftNav: MatSidenav) {
    this.leftNav = leftNav;
  }

  setRightNav(rightNav: MatSidenav) {
    this.rightNav = rightNav;
  }

  openLeftNav() {
    return this.leftNav.open();
  }

  closeLeftNav() {
    return this.leftNav.close();
  }

  toggleLeftNav() {
    this.leftNav.toggle();
  }

  openRightNav() {
    return this.rightNav.open();
  }

  closeRightNav() {
    return this.rightNav.close();
  }

  toggleRightNav() {
    this.rightNav.toggle();
  }

  home() {
    this.router.navigate(['/']);
  }

  getDirectories() {

    let r = this.router.url;

    let root = this.root;

    r = r.replace(root, 'directory');

    let i = 1;

    const a = r.split("/").filter((c: string) => {
      // filter blanks
      if (c) return c;
      return null;
    }).map((c: any) => {
      if (i != 1) {
        root += '/' + c;
      }
      let name = c.charAt(0).toUpperCase() + c.substring(1);
      name = name.replace(/-/g, ' ');
      ++i;
      return {
        name,
        link: '/' + root,
        position: i
      }
    });
    this.crumbs = a;
  }

}

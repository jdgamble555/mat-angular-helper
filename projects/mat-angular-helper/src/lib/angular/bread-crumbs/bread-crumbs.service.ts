import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BreadCrumbsService {

  crumbs!: any;

  constructor(private router: Router) { }

  getFriendlyURL(url: string): string {
    // create friendly URL
    return url
      .trim()
      .toLowerCase()
      .replace(/^[^a-z\d]*|[^a-z\d]*$/gi, '') // trim other characters as well
      .replace(/-/g, ' ')
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
  }

  getDirectories(root = 'directory/category'): void {

    let r = this.router.url;

    r = r.replace(root, 'directory');

    let i = 1;

    const a = r.split('/').filter((c: string) => {
      // filter blanks
      if (c) { return c; }
      return null;
    }).map((c: any) => {
      if (i !== 1) {
        root += '/' + c;
      }
      let name = c.charAt(0).toUpperCase() + c.substring(1);
      name = name.replace(/-/g, ' ');
      ++i;
      return {
        name,
        link: '/' + root,
        position: i
      };
    });
    this.crumbs = a;
  }
}

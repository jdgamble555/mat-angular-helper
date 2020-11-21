import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  cachetitle: string = '!';

  constructor(private title: Title, private meta: Meta, private router: Router) { }

  generateTags({
    title = '',
    description = '',
    image = '',
    summary = '',
    domain = '',
    user = ''
  }) {

    // do nothing if same page
    if (title === this.cachetitle) {
      return;
    }
    this.cachetitle = title;

    console.log(domain);

    this.title.setTitle(title);
    this.setTags([
      // Open Graph
      { name: 'og:url', content: 'https://' + domain + this.router.url },
      { name: 'og:title', content: title },
      { name: 'og:description', content: description },
      { name: 'og:image', content: image },
      // Twitter Card
      { name: 'twitter:card', content: summary },
      { name: 'twitter:creator', content: user },
      { name: 'twitter:site', content: '@' + domain },
      { name: 'twitter:image', content: image },
      { name: 'twitter:description', content: description }
    ]);
  }
  setTags(tags: any) {
    tags.forEach((tag: any) => {
      const k = tag[Object.keys(tag)[0]];
      const t = `name='${k}'`;
      if (this.meta.getTag(t)) {
        this.meta.updateTag(tag, t);
      } else {
        this.meta.addTag(tag);
      }
    });
  }
}
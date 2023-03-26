import { Component } from '@angular/core';
import { LocalStorageService } from './core/services/local-storage.service';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-super-store';

  constructor(private localstorage: LocalStorageService){}

  ngOnDestroy(){
    const keyname = 'productList'
    this.localstorage.removeItem({keyname})
  }
}

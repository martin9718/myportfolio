import { DOCUMENT } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  sticky:boolean = false;
  constructor() {}

  @HostListener('window:scroll', ['$event'])
  doScroll($event: Event){
    if ($event.target['defaultView'].pageYOffset >0) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  
}

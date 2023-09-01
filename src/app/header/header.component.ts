import { Component,HostListener } from '@angular/core';
import { ScrollDispatcher } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  
constructor(private scrollDispatcher: ScrollDispatcher) {}

scrollTo(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
shouldScrollNavbar = false;



}

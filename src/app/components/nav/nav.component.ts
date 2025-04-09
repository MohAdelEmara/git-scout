import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  activeTab: string = ' ';

  setActive(tab: string) {
    this.activeTab = tab;
  }


}

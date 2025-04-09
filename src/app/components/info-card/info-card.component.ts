import { Component } from '@angular/core';

@Component({
  selector: 'app-info-card',
  imports: [],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss'
})
export class InfoCardComponent {
  activeTab: string = ' ';

  setActive(tab: string) {
    this.activeTab = tab;
  }
}

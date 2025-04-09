import { Component } from '@angular/core';
import { NavComponent } from "./components/nav/nav.component";
import { FooterComponent } from "./components/footer/footer.component";
import { InfoCardComponent } from "./components/info-card/info-card.component";

@Component({
  selector: 'app-root',
  imports: [NavComponent, FooterComponent, InfoCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'github-user-search';
}

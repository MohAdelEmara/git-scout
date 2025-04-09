import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { InfoCardComponent } from "../../components/info-card/info-card.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [NavComponent, InfoCardComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

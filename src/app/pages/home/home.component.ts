import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { InfoCardComponent } from "../../components/info-card/info-card.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { GithubService } from '../../services/github.service';
import { NgIf } from '@angular/common'; // ✅ AQUI!!

@Component({
  selector: 'app-home',
  imports: [NavComponent, InfoCardComponent, FooterComponent, NgIf  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  user: any = null;

  constructor(private github: GithubService) {}

  onUserSearch(username: string) {
    this.github.getUser(username).subscribe({
      next: (data) => {
        this.user = data;
      },      
      error: (err) => {
        this.user = null;
      }    
    });

  }
}

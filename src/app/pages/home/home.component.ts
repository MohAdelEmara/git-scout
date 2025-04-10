import { Component, OnInit } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { InfoCardComponent } from "../../components/info-card/info-card.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { GithubService } from '../../services/github.service';
import { NgIf } from '@angular/common'; // ✅ AQUI!!
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  imports: [NavComponent, InfoCardComponent, FooterComponent, NgIf  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  user: any = null;

  constructor(private github: GithubService, private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.user;
  }

  onUserSearch(username: string) {
    this.github.getUser(username).subscribe({
      next: (data) => {
        this.user = data;
        this.userService.user = data; 

      },      
      error: (err) => {
        this.user = null;
      }    
    });

  }
}

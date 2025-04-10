import { Component, OnInit } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { RepoComponent } from "../../components/repo/repo.component";
import { GithubService } from '../../services/github.service';
import { CommonModule, NgFor } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-repositories',
  imports: [NavComponent, FooterComponent, RepoComponent, CommonModule],
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {

  repos: any[] = [];
  username = '';

  constructor(private github: GithubService, private userService: UserService) {}
  
  ngOnInit(): void {
    this.username = this.userService.user.login;
    this.github.getRepos(this.username).subscribe({
      next: (data) => {   
        this.repos = data;
        console.log('📦 Repositories:', this.repos);
      },
      error: (err) => console.error('Failed to load repos:', err)
    });
  }
}

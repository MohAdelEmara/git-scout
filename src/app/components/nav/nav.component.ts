import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true, // ✅ ESSENCIAL!!!
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(public router: Router) {}

  username: string = '';
  @Output() searchUser = new EventEmitter<string>();
  @Input() user: any = null;

search() {
    if (!this.username) return;
    console.log("searching .....")
    this.searchUser.emit(this.username);
  }
}
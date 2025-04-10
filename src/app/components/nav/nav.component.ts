import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true, // ✅ ESSENCIAL!!!
  imports: [RouterModule, FormsModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  username: string = '';
  @Output() searchUser = new EventEmitter<string>();
  @Input() user: any = null;

search() {
    if (!this.username) return;
    console.log("searching .....")
    this.searchUser.emit(this.username);
  }
}
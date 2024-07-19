import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientService } from './client.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ClientListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ClientService]
})
export class AppComponent {
  title = 'client';
}

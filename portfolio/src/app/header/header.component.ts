import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private route: Router) {}

  inicio() {
    this.route.navigate(['/home'])
  }

  tecnologias() {
    this.route.navigate(['/tecnologias'])
  }

  projetos() {
    this.route.navigate(['/projetos'])
  }
}

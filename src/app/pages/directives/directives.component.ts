import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  isVisible: boolean = false;
  items: string[] = ['item1', 'item2', 'item3', 'item4', 'item5', 'item5', 'item5', 'item5', 'item5', 'item5', 'item5', 'item5', 'item5', 'item5', 'item5', 'item5', 'item5'];
  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}

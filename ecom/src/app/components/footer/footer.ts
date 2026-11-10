import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './footer.html'
})
export class FooterComponent {
  protected newsletterEmail = '';
  protected subscribed = false;

  onSubscribe(event: Event): void {
    event.preventDefault();
    if (this.newsletterEmail.trim()) {
      this.subscribed = true;
      this.newsletterEmail = '';
    }
  }
}

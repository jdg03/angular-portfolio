import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar';
import { FooterComponent } from './shared/components/footer/footer';
import { BackgroundSwitcherComponent } from './shared/components/backgrounds/background-switcher/background-switcher';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, FooterComponent, BackgroundSwitcherComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('José González | Systems Engineer');
}

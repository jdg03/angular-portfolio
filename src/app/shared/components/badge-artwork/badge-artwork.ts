import { Component, input } from '@angular/core';
import { Credential } from '../../../core/models/credential.model';
@Component({
  selector: 'app-badge-artwork',
  templateUrl: './badge-artwork.html',
  styleUrl: './badge-artwork.css',
})
export class BadgeArtwork {
  readonly badge = input.required<Credential>();
}

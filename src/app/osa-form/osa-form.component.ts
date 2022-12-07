import { Component, OnInit } from '@angular/core';
import { Participant } from './participant';

@Component({
  selector: 'app-osa-form',
  templateUrl: './osa-form.component.html',
  styleUrls: ['./osa-form.component.scss']
})

export class OsaFormComponent {
  isAttending = ["Kommer", "Kommer tyvärr inte"];
  wantAlcohol = ["Jag dricker gärna alkohol", "Jag kör på alkfritt"];
  model = new Participant("", this.isAttending[0], "", "", "");

  submitted = false;

  onSubmit() { this.submitted = true; }
}


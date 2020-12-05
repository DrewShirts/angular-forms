import { Component, OnInit } from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {DataService} from '../data/data.service';
import {UserSettings} from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings : UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };
  userSettings : UserSettings = { ...this.originalUserSettings };
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }


  onBlur(form: NgModel) {
    console.log('in onBlur: ', form.valid);
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      result => console.log('success: ', result),
      error => console.log('error: ', error)
    );
  }

}

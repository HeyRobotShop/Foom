import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OpenviduParamsService } from './services/openvidu-params.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  openviduURL = 'https://localhost:8443';
  openviduSecret = 'MY_SECRET';

  constructor(private router: Router, private openviduParamsService: OpenviduParamsService) { }

  updateUrl(url) {
    this.openviduURL = url;
    this.updateParams();
  }

  updateSecret(secret) {
    this.openviduSecret = secret;
    this.updateParams();
  }

  updateParams() {
    this.openviduParamsService.updateParams({ openviduUrl: this.openviduURL, openviduSecret: this.openviduSecret });
  }

}

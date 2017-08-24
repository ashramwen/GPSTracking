import { Component, OnInit, Renderer, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private renderer: Renderer) {
    this.renderer.setElementClass(document.body, 'login', true);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.renderer.setElementClass(document.body, 'login', false);
  }

}

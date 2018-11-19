import { Component, OnInit } from '@angular/core';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title: string;
  public faUser = faUser;
  public faBars = faBars;
  constructor() { }

  ngOnInit() {
    this.title = 'my crm';
  }

}

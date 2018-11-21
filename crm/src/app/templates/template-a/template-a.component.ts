import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template-a',
  templateUrl: './template-a.component.html',
  styleUrls: ['./template-a.component.scss']
})
export class TemplateAComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}

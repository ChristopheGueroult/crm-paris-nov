import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template-b',
  templateUrl: './template-b.component.html',
  styleUrls: ['./template-b.component.scss']
})
export class TemplateBComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}

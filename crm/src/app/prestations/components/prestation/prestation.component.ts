import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  @Input() item: Prestation;
  constructor() {
  }

  ngOnInit() {
    // console.log(this.item);
  }

}

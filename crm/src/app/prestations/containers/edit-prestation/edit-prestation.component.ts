import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.scss']
})
export class EditPrestationComponent implements OnInit {
  presta: Prestation;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ps: PrestationService
  ) { }

  ngOnInit() {
    this.route.data
    .subscribe((data: { item: Prestation }) => {
      this.presta = data.item;
      // console.log(this.presta);
    });
  }

  public update(item: Prestation) {
    item.id = this.presta.id;
    this.ps.update(item).then((data) => {
      this.router.navigate(['prestations']);
    });
  }

}

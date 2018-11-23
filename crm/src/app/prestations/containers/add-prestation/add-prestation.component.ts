import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {

  constructor(
    private ps: PrestationService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  public add(item: Prestation) {
    this.ps.add(item).then((data) => {
      // data est la réponse de l'api
      this.router.navigate(['prestations']);
    });
    // this.ps.add(item).subscribe((data) => {
    //   // data est la réponse de l'api
    //   this.router.navigate(['prestations']);
    // });
  }

}

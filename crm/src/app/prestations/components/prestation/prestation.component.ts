import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { State } from 'src/app/shared/enums/state.enum';
import { PrestationService } from '../../services/prestation.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  @Input() item: Prestation;
  public states = Object.values(State);
  public faTrashAlt = faTrashAlt;
  constructor(
    private ps: PrestationService,
    private router: Router,
    private ar: ActivatedRoute
  ) {
  }

  ngOnInit() {
    console.log(this.ar);
  }

  public changeState(event) {
    const state = event.target.value;
    this.ps.update(this.item, state).then((data) => {
      // data is api answer
      this.item.state = state;
    });
    // this.ps.update(this.item, state).subscribe((data) => {
    //   // data is api answer
    //   this.item.state = state;
    // });
  }

  public delete() {
    this.ps.delete(this.item).then((data) => {
      // gérer réponse de l'api
    });
    // this.ps.delete(this.item).subscribe((data) => {
    //   // gérer réponse de l'api
    // });
  }

  public detail() {
    this.ps.presta$.next(this.item);
    this.ps.item$.next(this.item);
    // console.log(this.ps.presta$.value);
    this.router.navigate(['detail'], {relativeTo: this.ar});
  }

}

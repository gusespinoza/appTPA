import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  lat = -33.027819;
  lng = -71.491981;

  constructor(public router: Router) {

  }


  historialTratamientos() {
    this.router.navigate(['/historial-tratamientos']);
  }

}

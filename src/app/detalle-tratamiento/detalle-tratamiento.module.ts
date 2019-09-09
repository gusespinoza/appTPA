import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalleTratamientoPage } from './detalle-tratamiento.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleTratamientoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalleTratamientoPage]
})
export class DetalleTratamientoPageModule {}

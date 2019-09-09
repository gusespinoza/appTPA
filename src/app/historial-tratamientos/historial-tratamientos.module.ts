import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistorialTratamientosPage } from './historial-tratamientos.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialTratamientosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HistorialTratamientosPage]
})
export class HistorialTratamientosPageModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'pet',
    loadChildren: () => import('./pet/pet.module').then( m => m.PetPageModule)
  },
  {
    path: 'veterinarian',
    loadChildren: () => import('./veterinarian/veterinarian.module').then( m => m.VeterinarianPageModule)
  },
  {
    path: 'inventory',
    loadChildren: () => import('./inventory/inventory.module').then( m => m.InventoryPageModule)
  },
  {
    path: 'register-pet',
    loadChildren: () => import('./register-pet/register-pet.module').then( m => m.RegisterPetPageModule)
  },
  {
    path: 'appointment',
    loadChildren: () => import('./appointment/appointment.module').then( m => m.AppointmentPageModule)
  },
  {
    path: 'make-appointment',
    loadChildren: () => import('./make-appointment/make-appointment.module').then( m => m.MakeAppointmentPageModule)
  },
  {
    path: 'edit-appointment/:id',
    loadChildren: () => import('./edit-appointment/edit-appointment.module').then( m => m.EditAppointmentPageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./event/event.module').then( m => m.EventPageModule)
  },
  {
    path: 'client-appointments',
    loadChildren: () => import('./client-appointments/client-appointments.module').then( m => m.ClientAppointmentsPageModule)
  },
  {
    path: 'guardian',
    loadChildren: () => import('./guardian/guardian.module').then( m => m.GuardianPageModule)
  },
  {
    path: 'header',
    loadChildren: () => import('./componentbundle/header/header.module').then( m => m.HeaderPageModule)
  },
  {
    path: 'register-vet',
    loadChildren: () => import('./register-vet/register-vet.module').then( m => m.RegisterVetPageModule)
  },
  {
    path: 'register-guardian',
    loadChildren: () => import('./register-guardian/register-guardian.module').then( m => m.RegisterGuardianPageModule)
  },
  {
    path: 'vaccine-card',
    loadChildren: () => import('./vaccine-card/vaccine-card.module').then( m => m.VaccineCardPageModule)
  },
  {
    path: 'summary',
    loadChildren: () => import('./summary/summary.module').then( m => m.SummaryPageModule)
  },
  {
    path: 'inventory-report',
    loadChildren: () => import('./inventory-report/inventory-report.module').then( m => m.InventoryReportPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

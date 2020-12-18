import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'receta-emp',
    loadChildren: () => import('./receta-emp/receta-emp.module').then( m => m.RecetaEmpPageModule)
  },
  {
    path: 'receta-emc',
    loadChildren: () => import('./receta-emc/receta-emc.module').then( m => m.RecetaEmcPageModule)
  },
  {
    path: 'receta-eq',
    loadChildren: () => import('./receta-eq/receta-eq.module').then( m => m.RecetaEqPageModule)
  },
  {
    path: 'receta-ejq',
    loadChildren: () => import('./receta-ejq/receta-ejq.module').then( m => m.RecetaEjqPageModule)
  },
  {
    path: 'ingredientes-emq',
    loadChildren: () => import('./ingredientes-emq/ingredientes-emq.module').then( m => m.IngredientesEmqPageModule)
  },
  {
    path: 'ingredientes-emc',
    loadChildren: () => import('./ingredientes-emc/ingredientes-emc.module').then( m => m.IngredientesEmcPageModule)
  },
  {
    path: 'ingredientes-emp',
    loadChildren: () => import('./ingredientes-emp/ingredientes-emp.module').then( m => m.IngredientesEmpPageModule)
  },
  {
    path: 'ingredientes-ejq',
    loadChildren: () => import('./ingredientes-ejq/ingredientes-ejq.module').then( m => m.IngredientesEjqPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

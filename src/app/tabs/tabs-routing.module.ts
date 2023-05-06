import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'orderan',
        loadChildren: () => import('../orderan/orderan.module').then(m => m.OrderanPageModule)
      },
      {
        path: 'pelanggan',
        loadChildren: () => import('../pelanggan/pelanggan.module').then(m => m.PelangganPageModule)
      },
      {
        path: 'produk',
        loadChildren: () => import('../produk/produk.module').then( m => m.ProdukPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/orderan',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/orderan',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tambahproduk',
    loadChildren: () => import('./tambahproduk/tambahproduk.module').then( m => m.TambahprodukPageModule)
  },
  {
    path: 'tambahpelanggan',
    loadChildren: () => import('./tambahpelanggan/tambahpelanggan.module').then( m => m.TambahpelangganPageModule)
  },
  {
    path: 'tambahorderan',
    loadChildren: () => import('./tambahorderan/tambahorderan.module').then( m => m.TambahorderanPageModule)
  },
  // {
  //   path: 'pelanggan',
  //   loadChildren: () => import('./pelanggan/pelanggan.module').then( m => m.PelangganPageModule)
  // },
  // {
  //   path: 'produk',
  //   loadChildren: () => import('./produk/produk.module').then( m => m.ProdukPageModule)
  // },
  // {
  //   path: 'orderan',
  //   loadChildren: () => import('./orderan/orderan.module').then( m => m.OrderanPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

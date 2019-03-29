import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'remote',
        children: [
          {
            path: ':id/details',
            children: [
              {
                path: '',
                loadChildren: '../remote/detail/detail.module#DetailPageModule'
              }
            ]
          },
          {
            path: '',
            loadChildren: '../remote/remote.module#RemotePageModule'
          }
        ]
      },
      {
        path: 'local',
        children: [
          {
            path: ':id/details',
            children: [
              {
                path: '',
                loadChildren: '../local/detail/detail.module#DetailPageModule'
              }
            ]
          },
          {
            path: '',
            loadChildren: '../local/local.module#LocalPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/remote',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/remote',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

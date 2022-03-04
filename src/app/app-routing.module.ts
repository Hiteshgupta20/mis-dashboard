import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { BalancesheetComponent } from './modules/balancesheet/balancesheet.component';
import { CashflowComponent } from './modules/cashflow/cashflow.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { GmvcountComponent } from './modules/gmvcount/gmvcount.component';
import { IncomesheetComponent } from './modules/incomesheet/incomesheet.component';
import { LoginComponent } from './modules/login/login.component';
import { PostsComponent } from './modules/posts/posts.component';

const routes: Routes = [{
  path: 'def',
  component: DefaultComponent ,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'gmv',
    component: GmvcountComponent
  },
  {
    path: 'cash',
    component: CashflowComponent
  },
  {
    path: 'income',
    component: IncomesheetComponent
  },{
    path: 'balance',
    component: BalancesheetComponent
  }
]
},
{path:'',component:LoginComponent},
{path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

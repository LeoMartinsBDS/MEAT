import {NgModule} from '@angular/core'
import {SharedModule} from '../shared/shared.module'
import {RouterModule, Routes} from '@angular/router'

import {OrderComponent} from './order.component'
import {OrderItensComponent} from './order-itens/order-itens.component'
import {DeliveryCostsComponent} from './delivery-costs/delivery-costs.component'


const ROUTES: Routes = [
  {path: '', component: OrderComponent}
]

@NgModule({
  declarations: [OrderComponent, OrderItensComponent, DeliveryCostsComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})

export class OrderModule{}

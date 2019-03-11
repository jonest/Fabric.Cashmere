import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HcNotificationListComponent } from './notification-list/notification-list.component';
import { HcNotificationItemComponent } from './notification-item/notification-item.component';
import { HcNotificationDrawerComponent } from './notification-drawer.component';
import { HcNotificationService } from './notification.service';
import { ToasterModule } from '../toaster';
import { IconModule } from '../icon';
import { ButtonModule } from '../button';
import { DrawerModule } from '../drawer';

@NgModule({
    imports: [
        ToasterModule,
        CommonModule,
        IconModule,
        ButtonModule,
        DrawerModule
    ],
    declarations: [
        HcNotificationListComponent,
        HcNotificationItemComponent,
        HcNotificationDrawerComponent
    ],
    exports: [
        HcNotificationListComponent,
        HcNotificationItemComponent,
        HcNotificationDrawerComponent
    ],
    providers: [
        HcNotificationService
    ]
})
export class NotificationModule { }

import { Component, ViewChild } from '@angular/core';
import { Drawer } from '../drawer';

@Component({
    selector: 'hc-notification-drawer',
    templateUrl: './notification-drawer.component.html',
    styleUrls: ['./notification-drawer.component.scss']
})
export class HcNotificationDrawerComponent {

    @ViewChild(Drawer) private drawer: Drawer;

    public constructor() { }

    public toggle(): void {
        this.drawer.toggle();
    }
}

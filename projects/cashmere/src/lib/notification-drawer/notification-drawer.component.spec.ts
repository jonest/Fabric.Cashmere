import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';

import { HcNotificationDrawerComponent } from './notification-drawer.component';
import { DrawerModule } from '../drawer';
import { HcNotificationListComponent } from './notification-list/notification-list.component';
import { HcNotificationItemComponent } from './notification-item/notification-item.component';
import { IconModule } from '../icon';
import { HcNotificationService } from './notification.service';
import { HcToasterService } from '../toaster';

describe('HcNotificationDrawerComponent', () => {
    let component: HcNotificationDrawerComponent;
    let fixture: ComponentFixture<HcNotificationDrawerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HcNotificationDrawerComponent,
                HcNotificationListComponent,
                HcNotificationItemComponent
            ],
            imports: [
                DrawerModule,
                IconModule,
                BrowserAnimationsModule,
                OverlayModule
            ],
            providers: [
                HcNotificationService,
                HcToasterService
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HcNotificationDrawerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { OverlayModule } from '@angular/cdk/overlay';

import { HcNotificationListComponent } from './notification-list.component';
import { HcNotificationItemComponent } from '../notification-item/notification-item.component';
import { HcNotificationService } from '../notification.service';
import { IHcNotification } from '..';
import { IconModule } from '../../icon';
import { HcToasterService } from '../../toaster';

describe('HcNotificationListComponent', () => {
    let component: HcNotificationListComponent;
    let fixture: ComponentFixture<HcNotificationListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HcNotificationListComponent,
                HcNotificationItemComponent
            ],
            imports: [
                IconModule,
                OverlayModule
            ],
            providers: [
                HcNotificationService,
                HcToasterService
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HcNotificationListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('ctor', () => {
        it('should create component', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('notificationList', () => {
        it('should call notification service notifications', inject([HcNotificationService],
            (notificationService: HcNotificationService) => {
                // arrange
                const getNotificationsSpy: jasmine.Spy = spyOnProperty(notificationService, 'notifications', 'get');

                // act
                const list: Array<IHcNotification> = component.notificationList;

                // assert
                expect(getNotificationsSpy).toHaveBeenCalledTimes(1);
            }));
    });

    describe('showList', () => {
        it('should return true if one notification', inject([HcNotificationService],
            (notificationService: HcNotificationService) => {
                // arrange
                const getNotificationsSpy: jasmine.Spy = spyOnProperty(notificationService, 'notifications', 'get');
                getNotificationsSpy.and.returnValue([{}]);

                // act
                const shouldShowList: boolean = component.showList;

                // assert
                expect(shouldShowList).toBeTruthy();
            }));

        it('should return false if no notifications', inject([HcNotificationService],
            (notificationService: HcNotificationService) => {
                // arrange
                const getNotificationsSpy: jasmine.Spy = spyOnProperty(notificationService, 'notifications', 'get');
                getNotificationsSpy.and.returnValue([]);

                // act
                const shouldShowList: boolean = component.showList;

                // assert
                expect(shouldShowList).toBeFalsy();
            }));
    });

    describe('dismissAll', () => {
        it('should call notification service dismissAll', inject([HcNotificationService],
            (notificationService: HcNotificationService) => {
                // arrange
                const dismissAllSpy: jasmine.Spy = spyOn(notificationService, 'dismissAll');

                // act
                component.dismissAll();

                // assert
                expect(dismissAllSpy).toHaveBeenCalledTimes(1);
            }));
    });
});

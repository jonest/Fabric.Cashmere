import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { OverlayModule } from '@angular/cdk/overlay';

import { HcNotificationItemComponent } from './notification-item.component';
import { HcNotificationService } from '../notification.service';
import { HcNotificationType } from '../notification-type.constants';
import { IconModule } from '../../icon';
import { IHcNotification } from '..';
import { HcToasterService } from '../../toaster';
import { newGuid } from '../../util';

describe('HcNotificationItemComponent', () => {
    let component: HcNotificationItemComponent;
    let fixture: ComponentFixture<HcNotificationItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
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
        fixture = TestBed.createComponent(HcNotificationItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('ctor', () => {
        it('should create component', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('dismissNotification', () => {
        it('should call notification service dismiss', inject([HcNotificationService],
            (notificationService: HcNotificationService) => {
                // arrange
                const dismissSpy: jasmine.Spy = spyOn(notificationService, 'dismiss');
                dismissSpy.calls.reset();

                // act
                component.dismissNotification({} as IHcNotification);

                // assert
                expect(notificationService.dismiss).toHaveBeenCalledTimes(1);
            }));
    });

    describe('type', () => {
        it('should return the type from the notification', () => {
            // arrange
            component.notification = {
                id: newGuid(),
                type: HcNotificationType.Success,
                timeStamp: new Date(),
                configuration: {}
            };

            // act
            const type: HcNotificationType = component.type;

            // assert
            expect(type).toBe(HcNotificationType.Success);
        });

        it('should return info if notification is not set', () => {
            // arrange
            component.notification = {} as IHcNotification;

            // act
            const type: HcNotificationType = component.type;

            // assert
            expect(type).toBe(HcNotificationType.Info);
        });
    });
});

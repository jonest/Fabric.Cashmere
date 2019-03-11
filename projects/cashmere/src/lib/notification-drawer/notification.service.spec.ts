import { TestBed, inject } from '@angular/core/testing';
import { OverlayModule } from '@angular/cdk/overlay';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HcNotificationService } from './notification.service';
import { IHcNotification, HcNotificationType } from '.';
import { ToasterModule, HcToasterService } from '../toaster';

describe('HcNotificationService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                ToasterModule,
                OverlayModule,
                BrowserAnimationsModule
            ],
            providers: [
                HcNotificationService,
                HcToasterService
            ]
        });
    });

    it('should start up correctly', inject([HcNotificationService], (service: HcNotificationService) => {
        expect(service).toBeTruthy();
    }));

    describe('success', () => {
        it('should add notification to list', inject([HcNotificationService], (service: HcNotificationService) => {
            // arrange

            // act
            const notification: IHcNotification = service.success({ header: '', body: '' });

            // assert
            const actualNotification: IHcNotification =
                service.notifications.find((n: IHcNotification) => n.id === notification.id) as IHcNotification;
            expect(actualNotification).toBeTruthy();
            expect(actualNotification.type).toBe(HcNotificationType.Success);
        }));

        it('should call toast service addToast', inject([HcNotificationService, HcToasterService],
            (service: HcNotificationService, toastService: HcToasterService) => {
                // arrange
                const addToastSpy: jasmine.Spy = spyOn(toastService, 'addToast');
                addToastSpy.calls.reset();

                // act
                service.success({ header: '', body: '' });

                // assert
                expect(addToastSpy).toHaveBeenCalledTimes(1);
            }));

        it('should add notification to local storage', inject([HcNotificationService], (service: HcNotificationService) => {
            // arrange
            const setItemSpy: jasmine.Spy = spyOn(localStorage, 'setItem');

            service.dismissAll();

            // act
            const notification: IHcNotification = service.success({ header: '', body: '' });

            // assert
            expect(setItemSpy).toHaveBeenCalledWith(jasmine.any(String), JSON.stringify([notification]));
        }));
    });

    describe('info', () => {
        it('should add notification to list', inject([HcNotificationService], (service: HcNotificationService) => {
            // arrange

            // act
            const notification: IHcNotification = service.info({ header: '', body: '' });

            // assert
            const actualNotification: IHcNotification =
                service.notifications.find((n: IHcNotification) => n.id === notification.id) as IHcNotification;
            expect(actualNotification).toBeTruthy();
            expect(actualNotification.type).toBe(HcNotificationType.Info);
        }));

        it('should call toast service addToast', inject([HcNotificationService, HcToasterService],
            (service: HcNotificationService, toastService: HcToasterService) => {
                // arrange
                const addToastSpy: jasmine.Spy = spyOn(toastService, 'addToast');
                addToastSpy.calls.reset();

                // act
                service.info({ header: '', body: '' });

                // assert
                expect(addToastSpy).toHaveBeenCalledTimes(1);
            }));

        it('should add notification to local storage', inject([HcNotificationService], (service: HcNotificationService) => {
            // arrange
            const setItemSpy: jasmine.Spy = spyOn(localStorage, 'setItem');

            service.dismissAll();

            // act
            const notification: IHcNotification = service.info({ header: '', body: '' });

            // assert
            expect(setItemSpy).toHaveBeenCalledWith(jasmine.any(String), JSON.stringify([notification]));
        }));
    });

    describe('error', () => {
        it('should add notification to list', inject([HcNotificationService], (service: HcNotificationService) => {
            // arrange

            // act
            const notification: IHcNotification = service.alert({ header: '', body: '' });

            // assert
            const actualNotification: IHcNotification =
                service.notifications.find((n: IHcNotification) => n.id === notification.id) as IHcNotification;
            expect(actualNotification).toBeTruthy();
            expect(actualNotification.type).toBe(HcNotificationType.Alert);
        }));

        it('should call toast service addToast', inject([HcNotificationService, HcToasterService],
            (service: HcNotificationService, toastService: HcToasterService) => {
                // arrange
                const addToastSpy: jasmine.Spy = spyOn(toastService, 'addToast');
                addToastSpy.calls.reset();

                // act
                service.alert({ header: '', body: '' });

                // assert
                expect(addToastSpy).toHaveBeenCalledTimes(1);
            }));

        it('should add notification to local storage', inject([HcNotificationService], (service: HcNotificationService) => {
            // arrange
            const setItemSpy: jasmine.Spy = spyOn(localStorage, 'setItem');

            service.dismissAll();

            // act
            const notification: IHcNotification = service.alert({ header: '', body: '' });

            // assert
            expect(setItemSpy).toHaveBeenCalledWith(jasmine.any(String), JSON.stringify([notification]));
        }));
    });

    describe('warning', () => {
        it('should add notification to list', inject([HcNotificationService], (service: HcNotificationService) => {
            // arrange

            // act
            const notification: IHcNotification = service.warning({ header: '', body: '' });

            // assert
            const actualNotification: IHcNotification =
                service.notifications.find((n: IHcNotification) => n.id === notification.id) as IHcNotification;
            expect(actualNotification).toBeTruthy();
            expect(actualNotification.type).toBe(HcNotificationType.Warning);
        }));

        it('should call toast service addToast', inject([HcNotificationService, HcToasterService],
            (service: HcNotificationService, toastService: HcToasterService) => {
                // arrange
                const addToastSpy: jasmine.Spy = spyOn(toastService, 'addToast');
                addToastSpy.calls.reset();

                // act
                service.warning({ header: '', body: '' });

                // assert
                expect(addToastSpy).toHaveBeenCalledTimes(1);
            }));

        it('should add notification to local storage', inject([HcNotificationService], (service: HcNotificationService) => {
            // arrange
            const setItemSpy: jasmine.Spy = spyOn(localStorage, 'setItem');

            service.dismissAll();

            // act
            const notification: IHcNotification = service.warning({ header: '', body: '' });

            // assert
            expect(setItemSpy).toHaveBeenCalledWith(jasmine.any(String), JSON.stringify([notification]));
        }));
    });

    describe('dismiss', () => {
        it('should remove notification from list', inject([HcNotificationService], (service: HcNotificationService) => {
            // arrange
            const notification: IHcNotification = service.info({ header: '', body: '' });

            const storedNotification: IHcNotification =
                service.notifications.find((n: IHcNotification) => n.id === notification.id) as IHcNotification;
            expect(storedNotification).toBeTruthy();

            // act
            service.dismiss(notification);

            // assert
            const actualNotification: IHcNotification =
                service.notifications.find((n: IHcNotification) => n.id === notification.id) as IHcNotification;
            expect(actualNotification).toBeFalsy();
        }));

        it('should remove notification from local storage', inject([HcNotificationService], (service: HcNotificationService) => {
            // arrange
            const notification: IHcNotification = service.info({ header: '', body: '' });

            const setItemSpy: jasmine.Spy = spyOn(localStorage, 'setItem');

            // act
            service.dismiss(notification);

            // assert
            expect(setItemSpy).toHaveBeenCalled();
        }));
    });

    describe('dismissAll', () => {
        it('should remove all notifications from list', inject([HcNotificationService], (service: HcNotificationService) => {
            // arrange
            service.info({ header: '', body: '' });

            expect(service.notifications.length).toBeTruthy();

            // act
            service.dismissAll();

            // assert
            expect(service.notifications.length).toBeFalsy();
        }));

        it('should remove notifications from local storage', inject([HcNotificationService], (service: HcNotificationService) => {
            // arrange
            service.info({ header: '', body: '' });

            const setItemSpy: jasmine.Spy = spyOn(localStorage, 'setItem');

            // act
            service.dismissAll();

            // assert
            expect(setItemSpy).toHaveBeenCalledWith(jasmine.any(String), '[]');
        }));
    });
});

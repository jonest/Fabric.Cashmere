import { IHcNotification } from './notification.interface';

export class MockNotificationService {
    public success: jasmine.Spy = jasmine.createSpy('success');
    public info: jasmine.Spy = jasmine.createSpy('info');
    public error: jasmine.Spy = jasmine.createSpy('error');
    public warning: jasmine.Spy = jasmine.createSpy('warning');
    public dismiss: jasmine.Spy = jasmine.createSpy('dismiss');
    public dismissAll: jasmine.Spy = jasmine.createSpy('dismissAll');

    public get notifications(): Array<IHcNotification> {
        return [];
    }
}

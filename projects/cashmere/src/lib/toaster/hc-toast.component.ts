import {Component, EventEmitter, ElementRef, TemplateRef} from '@angular/core';
import {trigger, state, style, transition, animate, AnimationEvent} from '@angular/animations';

const ANIMATION_TIMINGS = '400ms cubic-bezier(0.25, 0.8, 0.25, 1)';

@Component({
    selector: 'hc-toaster',
    templateUrl: './hc-toast.html',
    styleUrls: ['./hc-toast.scss'],
    animations: [
        trigger('fade', [
            state('void', style({transform: 'scale(0.9)', opacity: 0})),
            state('enter', style({transform: 'none', opacity: 1})),
            state('leave', style({transform: 'none', opacity: 0})),
            transition('* => *', animate(ANIMATION_TIMINGS))
        ])
    ]
})
export class HcToastComponent {
    _styleType: string = 'success';
    _toastIcon: string = 'fa-check-circle';
    _headerText: string;
    _bodyText: string;
    _animationState: 'void' | 'enter' | 'leave' = 'enter';
    _animationStateChanged = new EventEmitter<AnimationEvent>();
    _closeClick = new EventEmitter<MouseEvent>();
    _canDismiss: boolean = false;
    _toastContent: TemplateRef<any>;

    constructor(public _el: ElementRef) {}

    _onAnimationStart(event: AnimationEvent) {
        this._animationStateChanged.emit(event);
    }

    _onAnimationDone(event: AnimationEvent) {
        this._animationStateChanged.emit(event);
    }

    _startExitAnimation() {
        this._animationState = 'leave';
    }

    _dismissClick(event: MouseEvent) {
        this._closeClick.emit(event);
    }
}

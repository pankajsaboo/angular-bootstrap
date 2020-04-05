import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GPTitleService {
    constructor() { }

    private emitChangeSource = new BehaviorSubject<string>(null);

    changeEmitted$ = this.emitChangeSource.asObservable();

    emitChange(value: string) {
        this.emitChangeSource.next(value);
    }
}
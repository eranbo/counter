import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-counter',
    imports: [NgClass],
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.scss',
})
export class CounterComponent {
    readonly DEFAULT_LABEL: string = 'Hit Me';
    label: string = this.DEFAULT_LABEL;
    labelState: string = 'hit-me';
    private intervalHandler: number = 0;
    private count: number = 10;

    onClick() {
        if (this.intervalHandler) {
            clearInterval(this.intervalHandler);
            this.intervalHandler = 0;
            this.count = 10;
            this.label = this.count.toString();
        }

        this.intervalHandler = setInterval(() => {
            this.label = this.count.toString();
            this.count--;
            this.labelState = 'counting';
            if (this.count === -1) {
                clearInterval(this.intervalHandler);
                this.intervalHandler = 0;
                this.label = this.DEFAULT_LABEL;
                this.count = 10;
                this.labelState = 'hit-me';
            }
        }, 1000);
    }
}

import { Directive, Input, Output, EventEmitter } from '@angular/core';
import 'daterangepicker';
import $ from "jquery";
import * as i0 from "@angular/core";
import * as i1 from "./ng2-daterangepicker.service";
export class DaterangepickerComponent {
    input;
    config;
    differs;
    activeRange;
    targetOptions = {};
    _differ = {};
    datePicker;
    options = {};
    selected = new EventEmitter();
    cancelDaterangepicker = new EventEmitter();
    applyDaterangepicker = new EventEmitter();
    hideCalendarDaterangepicker = new EventEmitter();
    showCalendarDaterangepicker = new EventEmitter();
    hideDaterangepicker = new EventEmitter();
    showDaterangepicker = new EventEmitter();
    constructor(input, config, differs) {
        this.input = input;
        this.config = config;
        this.differs = differs;
        this._differ['options'] = this.differs.find(this.options).create();
        this._differ['settings'] = this.differs.find(this.config.settings).create();
    }
    ngAfterViewInit() {
        this.render();
        this.attachEvents();
    }
    ngDoCheck() {
        let optionsChanged = this._differ['options'].diff(this.options);
        let settingsChanged = this._differ['settings'].diff(this.config.settings);
        if (optionsChanged || settingsChanged) {
            this.render();
            this.attachEvents();
            if (this.activeRange && this.datePicker) {
                this.datePicker.setStartDate(this.activeRange.start);
                this.datePicker.setEndDate(this.activeRange.end);
            }
        }
    }
    ngOnDestroy() {
        this.destroyPicker();
    }
    render() {
        this.targetOptions = Object.assign({}, this.config.settings, this.options);
        $(this.input.nativeElement).daterangepicker(this.targetOptions, this.callback.bind(this));
        if (this.options.customClasses && this.options.customClasses.length) {
            for (let customClass of this.options.customClasses) {
                this.datePicker = $(this.input.nativeElement).data('daterangepicker').container.addClass(customClass);
            }
        }
        else {
            this.datePicker = $(this.input.nativeElement).data('daterangepicker');
        }
    }
    callback(start, end, label) {
        this.activeRange = {
            start: start,
            end: end,
            label: label
        };
        this.selected.emit(this.activeRange);
    }
    destroyPicker() {
        try {
            $(this.input.nativeElement).data('daterangepicker').remove();
        }
        catch (e) {
            console.log(e.message);
        }
    }
    attachEvents() {
        $(this.input.nativeElement).on('cancel.daterangepicker', (e, picker) => {
            let event = { event: e, picker: picker };
            this.cancelDaterangepicker.emit(event);
        });
        $(this.input.nativeElement).on('apply.daterangepicker', (e, picker) => {
            let event = { event: e, picker: picker };
            this.applyDaterangepicker.emit(event);
        });
        $(this.input.nativeElement).on('hideCalendar.daterangepicker', (e, picker) => {
            let event = { event: e, picker: picker };
            this.hideCalendarDaterangepicker.emit(event);
        });
        $(this.input.nativeElement).on('showCalendar.daterangepicker', (e, picker) => {
            let event = { event: e, picker: picker };
            this.showCalendarDaterangepicker.emit(event);
        });
        $(this.input.nativeElement).on('hide.daterangepicker', (e, picker) => {
            let event = { event: e, picker: picker };
            this.hideDaterangepicker.emit(event);
        });
        $(this.input.nativeElement).on('show.daterangepicker', (e, picker) => {
            let event = { event: e, picker: picker };
            this.showDaterangepicker.emit(event);
        });
    }
    static ɵfac = function DaterangepickerComponent_Factory(t) { return new (t || DaterangepickerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.DaterangepickerConfig), i0.ɵɵdirectiveInject(i0.KeyValueDiffers)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: DaterangepickerComponent, selectors: [["", "daterangepicker", ""]], inputs: { options: "options" }, outputs: { selected: "selected", cancelDaterangepicker: "cancelDaterangepicker", applyDaterangepicker: "applyDaterangepicker", hideCalendarDaterangepicker: "hideCalendarDaterangepicker", showCalendarDaterangepicker: "showCalendarDaterangepicker", hideDaterangepicker: "hideDaterangepicker", showDaterangepicker: "showDaterangepicker" } });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DaterangepickerComponent, [{
        type: Directive,
        args: [{
                selector: '[daterangepicker]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.DaterangepickerConfig }, { type: i0.KeyValueDiffers }]; }, { options: [{
            type: Input
        }], selected: [{
            type: Output
        }], cancelDaterangepicker: [{
            type: Output
        }], applyDaterangepicker: [{
            type: Output
        }], hideCalendarDaterangepicker: [{
            type: Output
        }], showCalendarDaterangepicker: [{
            type: Output
        }], hideDaterangepicker: [{
            type: Output
        }], showDaterangepicker: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWRhdGVyYW5nZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItZGF0ZXJhbmdlcGlja2VyL3NyYy9saWIvbmcyLWRhdGVyYW5nZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFJVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFHYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7O0FBTXZCLE1BQU0sT0FBTyx3QkFBd0I7SUFtQnpCO0lBQ0E7SUFDQTtJQW5CRixXQUFXLENBQU07SUFDakIsYUFBYSxHQUFRLEVBQUUsQ0FBQztJQUN4QixPQUFPLEdBQVEsRUFBRSxDQUFDO0lBRW5CLFVBQVUsQ0FBTTtJQUVkLE9BQU8sR0FBUSxFQUFFLENBQUM7SUFFakIsUUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDOUIscUJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUMzQyxvQkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQzFDLDJCQUEyQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDakQsMkJBQTJCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNqRCxtQkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3pDLG1CQUFtQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFbkQsWUFDVSxLQUFpQixFQUNqQixNQUE2QixFQUM3QixPQUF3QjtRQUZ4QixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLFdBQU0sR0FBTixNQUFNLENBQXVCO1FBQzdCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBRWhDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFD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MkI7a0JBQXBDLE1BQU07WUFDRywyQkFBMkI7a0JBQXBDLE1BQU07WUFDRyxtQkFBbUI7a0JBQTVCLE1BQU07WUFDRyxtQkFBbUI7a0JBQTVCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uRGVzdHJveSxcbiAgRG9DaGVjayxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBFbGVtZW50UmVmLFxuICBLZXlWYWx1ZURpZmZlcnNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgJ2RhdGVyYW5nZXBpY2tlcic7XG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgeyBEYXRlcmFuZ2VwaWNrZXJDb25maWcgfSBmcm9tIFwiLi9uZzItZGF0ZXJhbmdlcGlja2VyLnNlcnZpY2VcIjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2RhdGVyYW5nZXBpY2tlcl0nXG59KVxuZXhwb3J0IGNsYXNzIERhdGVyYW5nZXBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgRG9DaGVjayB7XG5cbiAgcHJpdmF0ZSBhY3RpdmVSYW5nZTogYW55O1xuICBwcml2YXRlIHRhcmdldE9wdGlvbnM6IGFueSA9IHt9O1xuICBwcml2YXRlIF9kaWZmZXI6IGFueSA9IHt9O1xuXG4gIHB1YmxpYyBkYXRlUGlja2VyOiBhbnk7XG5cbiAgQElucHV0KCkgb3B0aW9uczogYW55ID0ge307XG5cbiAgQE91dHB1dCgpIHNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2FuY2VsRGF0ZXJhbmdlcGlja2VyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYXBwbHlEYXRlcmFuZ2VwaWNrZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBoaWRlQ2FsZW5kYXJEYXRlcmFuZ2VwaWNrZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzaG93Q2FsZW5kYXJEYXRlcmFuZ2VwaWNrZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBoaWRlRGF0ZXJhbmdlcGlja2VyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2hvd0RhdGVyYW5nZXBpY2tlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGlucHV0OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY29uZmlnOiBEYXRlcmFuZ2VwaWNrZXJDb25maWcsXG4gICAgcHJpdmF0ZSBkaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnNcbiAgKSB7XG4gICAgdGhpcy5fZGlmZmVyWydvcHRpb25zJ10gPSB0aGlzLmRpZmZlcnMuZmluZCh0aGlzLm9wdGlvbnMpLmNyZWF0ZSgpO1xuICAgIHRoaXMuX2RpZmZlclsnc2V0dGluZ3MnXSA9IHRoaXMuZGlmZmVycy5maW5kKHRoaXMuY29uZmlnLnNldHRpbmdzKS5jcmVhdGUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuYXR0YWNoRXZlbnRzKCk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgbGV0IG9wdGlvbnNDaGFuZ2VkID0gdGhpcy5fZGlmZmVyWydvcHRpb25zJ10uZGlmZih0aGlzLm9wdGlvbnMpO1xuICAgIGxldCBzZXR0aW5nc0NoYW5nZWQgPSB0aGlzLl9kaWZmZXJbJ3NldHRpbmdzJ10uZGlmZih0aGlzLmNvbmZpZy5zZXR0aW5ncyk7XG5cbiAgICBpZiAob3B0aW9uc0NoYW5nZWQgfHwgc2V0dGluZ3NDaGFuZ2VkKSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgdGhpcy5hdHRhY2hFdmVudHMoKTtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZVJhbmdlICYmIHRoaXMuZGF0ZVBpY2tlcikge1xuICAgICAgICB0aGlzLmRhdGVQaWNrZXIuc2V0U3RhcnREYXRlKHRoaXMuYWN0aXZlUmFuZ2Uuc3RhcnQpO1xuICAgICAgICB0aGlzLmRhdGVQaWNrZXIuc2V0RW5kRGF0ZSh0aGlzLmFjdGl2ZVJhbmdlLmVuZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95UGlja2VyKCk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLnRhcmdldE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvbmZpZy5zZXR0aW5ncywgdGhpcy5vcHRpb25zKTtcblxuICAgICg8YW55PiQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KSkuZGF0ZXJhbmdlcGlja2VyKFxuICAgICAgdGhpcy50YXJnZXRPcHRpb25zLFxuICAgICAgdGhpcy5jYWxsYmFjay5iaW5kKHRoaXMpXG4gICAgKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuY3VzdG9tQ2xhc3NlcyAmJiB0aGlzLm9wdGlvbnMuY3VzdG9tQ2xhc3Nlcy5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IGN1c3RvbUNsYXNzIG9mIHRoaXMub3B0aW9ucy5jdXN0b21DbGFzc2VzKSB7XG4gICAgICAgIHRoaXMuZGF0ZVBpY2tlciA9IChcbiAgICAgICAgICA8YW55PiQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KVxuICAgICAgICApLmRhdGEoJ2RhdGVyYW5nZXBpY2tlcicpLmNvbnRhaW5lci5hZGRDbGFzcyhjdXN0b21DbGFzcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0ZVBpY2tlciA9IChcbiAgICAgICAgPGFueT4kKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudClcbiAgICAgICkuZGF0YSgnZGF0ZXJhbmdlcGlja2VyJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjYWxsYmFjayhzdGFydD86IGFueSwgZW5kPzogYW55LCBsYWJlbD86IGFueSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlUmFuZ2UgPSB7XG4gICAgICBzdGFydDogc3RhcnQsXG4gICAgICBlbmQ6IGVuZCxcbiAgICAgIGxhYmVsOiBsYWJlbFxuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ZWQuZW1pdCh0aGlzLmFjdGl2ZVJhbmdlKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveVBpY2tlcigpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgJCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpLmRhdGEoJ2RhdGVyYW5nZXBpY2tlcicpLnJlbW92ZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hFdmVudHMoKTogdm9pZCB7XG4gICAgJCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpLm9uKCdjYW5jZWwuZGF0ZXJhbmdlcGlja2VyJyxcbiAgICAgIChlOiBhbnksIHBpY2tlcjogYW55KSA9PiB7XG4gICAgICAgIGxldCBldmVudCA9IHsgZXZlbnQ6IGUsIHBpY2tlcjogcGlja2VyIH07XG4gICAgICAgIHRoaXMuY2FuY2VsRGF0ZXJhbmdlcGlja2VyLmVtaXQoZXZlbnQpO1xuICAgICAgfVxuICAgICk7XG5cbiAgICAkKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkub24oJ2FwcGx5LmRhdGVyYW5nZXBpY2tlcicsXG4gICAgICAoZTogYW55LCBwaWNrZXI6IGFueSkgPT4ge1xuICAgICAgICBsZXQgZXZlbnQgPSB7IGV2ZW50OiBlLCBwaWNrZXI6IHBpY2tlciB9O1xuICAgICAgICB0aGlzLmFwcGx5RGF0ZXJhbmdlcGlja2VyLmVtaXQoZXZlbnQpO1xuICAgICAgfVxuICAgICk7XG5cbiAgICAkKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkub24oJ2hpZGVDYWxlbmRhci5kYXRlcmFuZ2VwaWNrZXInLFxuICAgICAgKGU6IGFueSwgcGlja2VyOiBhbnkpID0+IHtcbiAgICAgICAgbGV0IGV2ZW50ID0geyBldmVudDogZSwgcGlja2VyOiBwaWNrZXIgfTtcbiAgICAgICAgdGhpcy5oaWRlQ2FsZW5kYXJEYXRlcmFuZ2VwaWNrZXIuZW1pdChldmVudCk7XG4gICAgICB9XG4gICAgKTtcblxuICAgICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KS5vbignc2hvd0NhbGVuZGFyLmRhdGVyYW5nZXBpY2tlcicsXG4gICAgICAoZTogYW55LCBwaWNrZXI6IGFueSkgPT4ge1xuICAgICAgICBsZXQgZXZlbnQgPSB7IGV2ZW50OiBlLCBwaWNrZXI6IHBpY2tlciB9O1xuICAgICAgICB0aGlzLnNob3dDYWxlbmRhckRhdGVyYW5nZXBpY2tlci5lbWl0KGV2ZW50KTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgJCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpLm9uKCdoaWRlLmRhdGVyYW5nZXBpY2tlcicsXG4gICAgICAoZTogYW55LCBwaWNrZXI6IGFueSkgPT4ge1xuICAgICAgICBsZXQgZXZlbnQgPSB7IGV2ZW50OiBlLCBwaWNrZXI6IHBpY2tlciB9O1xuICAgICAgICB0aGlzLmhpZGVEYXRlcmFuZ2VwaWNrZXIuZW1pdChldmVudCk7XG4gICAgICB9XG4gICAgKTtcblxuICAgICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KS5vbignc2hvdy5kYXRlcmFuZ2VwaWNrZXInLFxuICAgICAgKGU6IGFueSwgcGlja2VyOiBhbnkpID0+IHtcbiAgICAgICAgbGV0IGV2ZW50ID0geyBldmVudDogZSwgcGlja2VyOiBwaWNrZXIgfTtcbiAgICAgICAgdGhpcy5zaG93RGF0ZXJhbmdlcGlja2VyLmVtaXQoZXZlbnQpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxufVxuIl19
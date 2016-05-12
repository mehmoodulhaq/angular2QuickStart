import { Directive, ElementRef, Input } from '@angular/core';
@Directive({ 
    selector: '[myHighlight]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
 
})
export class HighlightDirective {
    // constructor(el: ElementRef) {
    //    el.nativeElement.style.backgroundColor = 'yellow';
    // }
    private _defaultColor = 'red';
    private el: HTMLElement;
    constructor(el: ElementRef) { this.el = el.nativeElement; }
    @Input() set defaultColor(colorName:string){
        this._defaultColor = colorName || this._defaultColor;
    }
    onMouseEnter() { this.highlight(this.highlightColor || this._defaultColor); }
    onMouseLeave() { this.highlight(null); }
    @Input('myHighlight') highlightColor: string;
    private highlight(color: string) {
        this.el.style.backgroundColor = color;
    }
    
    
}
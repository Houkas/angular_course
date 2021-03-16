import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  
  @Input() defaultColor:string = 'transparent';
  @Input() highlightColor:string = 'yellow';
  
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {

   }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'violet');
  }

  @HostListener('mouseenter') mousehover(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'border', 'solid 1px transparent');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'border', 'solid 1px violet');
    this.backgroundColor = this.defaultColor;
  }

}

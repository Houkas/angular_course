import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  
  constructor(private elRef: ElementRef, private renderer: Renderer2) {

   }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'violet');
  }

  @HostListener('mouseenter') mousehover(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'border', 'solid 1px transparent');
    this.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'border', 'solid 1px violet');
    this.backgroundColor = 'unset';
  }
  @HostBinding('style.backgroundColor') backgroundColor: string;

}

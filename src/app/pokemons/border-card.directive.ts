
import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
   selector:'[pkmnBorderCard]'
})

export class BorderCardDirective {
    private initialColor : string = '#f5f5f5';
    private defaultColor: string;
    private defaultHeigth: number = 180;

    constructor(private el: ElementRef) {
        this.setBorder(this.initialColor);
        this.setHeight(this.defaultHeigth);
    }
    
    @Input('pkmnBorderCard') borderColor:string;

    @HostListener('mouseenter') onMouseEnter(){
        this.setBorder(this.borderColor || this.defaultColor);
    }
    @HostListener('mouseleave') onMouseLeave(){
        this.setBorder(this.initialColor);
    }
    private setBorder(color:string){
        let  border = ' solid 4px'+ color;
        this.el.nativeElement.style.border = border;
    }

    private setHeight(taille: number){
        this.el.nativeElement.style.height = taille;
    }
}
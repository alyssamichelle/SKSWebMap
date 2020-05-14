import { Component, OnInit, ChangeDetectorRef, Renderer2, ElementRef, ViewEncapsulation } from "@angular/core";
import { EventData, dataTransfer } from "@mobilize/base-components";
import { FormComponent } from "@mobilize/winforms-components";
import { WebMapService } from "@mobilize/angularclient";

import { products } from './products';
@Component({
   selector: "window-1",
   templateUrl: "window-1.component.html",
   styleUrls: ["window-1.component.css"],
   encapsulation: ViewEncapsulation.None
})
@dataTransfer(["frmSKS.WindowOne"])
export class WindowOneClass extends FormComponent {
   protected webServices: WebMapService;
   constructor(wmservice: WebMapService, changeDetector: ChangeDetectorRef, render2: Renderer2, elem: ElementRef) {
      super(wmservice, changeDetector, render2, elem);
   }

   public gridData: any[] = products;
}
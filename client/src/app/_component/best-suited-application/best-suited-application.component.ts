import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import ApplicationHelper from 'src/app/_helper/ApplicationHelper';
import FrameHelper from 'src/app/_helper/FrameHelper';
import { Application } from 'src/assets/Shared/Enums';

@Component({
  selector: 'app-best-suited-application',
  templateUrl: './best-suited-application.component.html',
  styleUrls: ['./best-suited-application.component.css']
})
export class BestSuitedApplicationComponent implements OnInit {
  @Input() cardSize: string = "";
  @Input() layout: string = "";
  @Input() connection: string = "";

  constructor(private sanitizer: DomSanitizer, private spinner: NgxSpinnerService) { }
  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2500);
  }

  GetApplication(cardSize: string, layout: string, connection: string) {
    return ApplicationHelper.GetApplication(cardSize, layout, connection);
  }

  GetIFrame(application: Application) {
    debugger;
    return this.sanitizer.bypassSecurityTrustResourceUrl(FrameHelper.GetIFrame(application));
  }

  Allowed(cardSize: string, layout: string, connection: string): boolean {
    if (cardSize == '1') { return true; }
    if (layout == '1' || layout == '2') { return true; }
    if (connection == '1' || connection == '2') { return true; }
    return false;
  }
}

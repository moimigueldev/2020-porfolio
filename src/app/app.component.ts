import { Component, OnInit } from '@angular/core';

declare var VANTA;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  showAvatar = false;

  ngOnInit(): void {
    VANTA.GLOBE({
      el: "#intro",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    })

    setTimeout(() => {
      this.showAvatar = true
    }, 100);

  }
}

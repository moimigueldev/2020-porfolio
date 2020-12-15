import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var VANTA;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'portfolio';
  showAvatar = false;

  @ViewChild('scrollDownArrow') scrollDownArrow: ElementRef;

  ngAfterViewInit(): void {
    this.initialAnimations();
  }

  ngOnInit(): void {

    this.initiateVanta()



  }

  initiateVanta(): void {
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

    VANTA.CLOUDS({
      el: "#skills",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      skyColor: 0x23153c,
      cloudColor: 0x23153c,
      cloudShadowColor: 0x23153c,
      sunColor: 0x23153c,
      sunGlareColor: 0x23153c,
      sunlightColor: 0x23153c
    })
  }

  initialAnimations(): void {
    // avatar movement animation
    setTimeout(() => {
      this.showAvatar = true
    }, 100);

    // scroll down arrow
    setTimeout(() => {
      this.scrollDownArrow.nativeElement.classList.add('cat-animation')
      setTimeout(() => {
        this.scrollDownArrow.nativeElement.classList.remove('cat-animation')
      }, 3500);
    }, 2000)

  }



}

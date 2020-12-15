import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-slider',
  templateUrl: './menu-slider.component.html',
  styleUrls: ['./menu-slider.component.scss']
})
export class MenuSliderComponent implements OnInit {


  @ViewChild('leftArrow') leftArrow: ElementRef;
  @ViewChild('rightArrow') rightArrow: ElementRef;
  @ViewChild('menu') menu: ElementRef;

  show = true;
  showLeftArrow = false;
  showRightArrow = true;

  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log('showing');
    //   this.show = true
    // }, 1000);
    // setTimeout(() => {
    //   console.log('showing');
    //   this.show = false
    // }, 2000);
  }


  hideMenu(): void {
    console.log('show')
    this.showRightArrow = !false;
    this.showLeftArrow = !true;
    this.show = !false;
  }

  showMenu(): void {
    console.log('hide');
    this.showRightArrow = false;
    this.showLeftArrow = true;
    this.show = false;
  }

}

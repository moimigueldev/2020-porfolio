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
  prevTabSelected = 0;

  constructor() { }

  ngOnInit(): void {
    document.body.style.paddingLeft = '200px'

  }


  hideMenu(): void {
    console.log('show')

    this.showRightArrow = !false;
    this.showLeftArrow = !true;
    this.show = !false;
    document.body.style.paddingLeft = '200px'

  }

  showMenu(): void {
    console.log('hide');
    this.showRightArrow = false;
    this.showLeftArrow = true;
    this.show = false;
    document.body.style.paddingLeft = '0px'
  }

  selectTab(index: number) {
    this.menu.nativeElement.children[index].classList.add('active')
    this.menu.nativeElement.children[this.prevTabSelected].classList.remove('active')
    this.prevTabSelected = index
  }

}

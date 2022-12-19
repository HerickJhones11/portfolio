import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  menu: any;
  navList: any;

  ngOnInit(): void {
    let header = document.querySelector("header");
    window.addEventListener("scroll", function() {
      header?.classList.toggle("sticky", window.scrollY > 0);
    });
    this.menu = document.querySelector("#menu-icon");
    this.navList = document.querySelector(".navlist");
    this.windowScroll();
  }
  menuToggle(){
    this.menu.classList.toggle('bx-x');
    this.navList.classList.toggle('active');
  }
  windowScroll(){
    let menu = this.menu;
    let navList = this.navList;
    window.onscroll = function(event) {
      menu.classList.remove('bx-x');
      navList.classList.remove('active');
    };
  }

}

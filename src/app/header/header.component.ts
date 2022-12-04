import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    let header = document.querySelector("header");
    window.addEventListener("scroll", function() {
      header?.classList.toggle("sticky", window.scrollY > 0);
    });
  }

}

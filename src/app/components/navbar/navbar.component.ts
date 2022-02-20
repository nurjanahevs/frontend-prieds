import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor() { }

  dateTime: Date

  ngOnInit(): void {
    this.dateTime = new Date()
  }

}

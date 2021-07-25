

import { Component, OnInit } from '@angular/core';

import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {

  active = '';

  NAV = [
    {
      name: 'Book List',
      link: '/list',
      icon: 'book'
    },
    {
      name: 'Add Book',
      link: '/create',
      icon: 'albums'
    },
    {
      name: 'Borrow Book',
      link: '/borrow',
      icon: 'person'
    },
    {
      name: 'Borrower List',
      link: '/borrower',
      icon: 'list'
    }
  ]

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.active = event.url
    })
  }

  ngOnInit() { }

}

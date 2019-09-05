import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router) { }

  message: string;
  sending = false;

  ngOnInit() {
  }

  cancel() {
    this.close();

  }

  save() {
    this.sending = true;
    this.message = 'sending...';
    setTimeout(() => {
      this.sending = false;
      this.close();
    }, 500);
  }

  private close() {
    this.router.navigate([{ outlets: { popup: null } }]);
  }

}

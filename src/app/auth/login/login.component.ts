import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private service: AuthService, private router: Router) {}

  message: string;

  ngOnInit() {
    this.setMessage();
  }
  setMessage() {
    this.message = this.service.isLoggedIn ? "logged in" : "logged out";
  }

  get logged() {
    return this.service.isLoggedIn;
  }
  login() {
    this.message = "Trying to log in";
    this.service.login().subscribe((logged: boolean) => {
      this.setMessage();
      let url = this.service.redirectUrl ? this.service.redirectUrl : "\admin";
      this.router.navigateByUrl(url);
    });
  }
  logout() {
    this.service.logout();
    this.setMessage();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  User: {
    username: string,
    password: string
  };

  constructor(private readonly service: LoginService, private readonly router: Router) { }

  ngOnInit(): void {
    this.User = {
      username: '',
      password: ''
    }
  }

  public login(): void {
    console.log(this.User);
    this.service.login(this.User).subscribe((token: any) => {
      sessionStorage.setItem('token', JSON.stringify(token.a_token));
      this.router.navigate(['/CustomerDetails']);
    });
  }
}

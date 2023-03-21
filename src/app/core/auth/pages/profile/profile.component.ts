import { Component } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  user: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser()
  }

  onLogin() {
    const { email, password } = this.getUserForm()
    this.userService.login({ email, password }).subscribe(status => {
    })
  }

  getUser() {
    this.userService.getProfileUser().subscribe(user => {
      this.user = user
      console.log(this.user)
    })
  }

  getUserForm() {
    return {
      email: 'shbsh',
      password: 'wsdgr',
      browser: 'chrome',
      captchaResolve: true
    }
  }

}

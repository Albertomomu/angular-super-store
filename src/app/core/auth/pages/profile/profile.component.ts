import { Component } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  user: any;
  userProperty!: string;
  userPropertyValue!: string;
  userList: any[] = [];
  profileOptions: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser()
    this.getUserList()
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

  getUserList() {
    this.userService.getUserList().subscribe(userList => {
      this.userList = userList
      console.log(this.userList)
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

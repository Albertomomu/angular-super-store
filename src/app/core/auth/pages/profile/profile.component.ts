import { Component } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  user: any;
  userProperty: string = 'name';
  userPropertyValue!: string;
  userList: any[] = [];

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
      this.userPropertyValue = user.name.first
    })
  }

  getUserList() {
    this.userService.getUserList().subscribe(userList => {
      this.userList = userList
      console.log(this.userList)
    })
  }

  getData(event: Event) {
    if (!event.target) return
    const tooltip = (event.target as HTMLElement).getAttribute('data-tooltip')
    console.log(tooltip)
    switch (tooltip) {
      case 'Nombre':
        this.userProperty = 'name';
        break;
    }
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

import { Component } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  usersList: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserList().subscribe(userList => {
      this.usersList = userList
      console.log(this.usersList)
    })
  }

}

import { Component } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserList()
  }

}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers(1).subscribe()
  }

}

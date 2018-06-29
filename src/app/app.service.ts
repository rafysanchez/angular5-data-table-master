import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {User} from "./User";

@Injectable()
export class ApiService {

  public getUsers(): Observable<any> {
    const fakeUsers: User[] = [
      {position: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
      {position: 2, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
      {position: 3, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
      {position: 4, firstName: 'xser', lastName: 'pb', email: 'xxx@gmail.com'},
      {position: 5, firstName: 'rtey', lastName: 'Jac', email: 'www@gmail.com'},
      {position: 6, firstName: 'uyio', lastName: 'Pan', email: 'ttt@gmail.com'},
      {position: 7, firstName: 'nhyui', lastName: 'pb', email: 'yyy@gmail.com'}
    ];
    return Observable.of(fakeUsers).delay(500);
  }

}

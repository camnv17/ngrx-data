import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelEmployee } from 'src/app/@models/model.employee';
import { EmployeeService } from 'src/app/@services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  listEmployees: ModelEmployee[] = [];

  loading = false;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.loading = true;

    this.employeeService
      .GetAll()
      .pipe()
      .subscribe((response) => {
        this.listEmployees = response;

        this.loading = false;
      });
  }

  deleteById(id: string) {
    this.loading = true;
    this.employeeService
      .DeleteOne(id)
      .pipe()
      .subscribe((value) => {
        this.loading = false;
      });
  }
}

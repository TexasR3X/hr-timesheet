import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';
import { Department } from '../../interfaces/department';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-departments',
  standalone: false,
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss'
})
export class DepartmentsComponent implements OnInit {
  departments!: Department[]; // I could probably delete departments with Observable Way 2.
  $departments!: Observable<Department[]>;

  constructor(
    private departmentsService: DepartmentsService,
    private router: Router,
  ) { }
  
  ngOnInit(): void {
    ///// Observable Way 1 /////
    // this.departmentsService.getDepartments().subscribe(departments => {
    //   this.departments = departments;
    // });

    ///// Observable Way 2 /////
    this.$departments = this.departmentsService.getDepartments();
  }

  goToDepartment(departmentId: string): void {
    this.router.navigate(['./timesheet', { id: departmentId }]);
  }
}
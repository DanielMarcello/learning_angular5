import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'; // para tener data de la ruta activada

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  private departmentId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // tslint:disable-next-line:radix
    /* let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId = id; */
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious() {
    const previousId = this.departmentId - 1;
    this.router.navigate(['../', previousId], {relativeTo: this.route});
  }

  goNext() {
    const nextId = this.departmentId + 1;
    this.router.navigate(['../', nextId], {relativeTo: this.route});
  }

  gotoDepartments() {
    const selectedId = this.departmentId ? this.departmentId : null;
    /* this.router.navigate(['/departments', {id: selectedId}]); */
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }

  showOverview() {
    this.router.navigate(['./overview'], {relativeTo: this.route});
  }

  showContact() {
    this.router.navigate(['./contact'], {relativeTo: this.route});
  }
}

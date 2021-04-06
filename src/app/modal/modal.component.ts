import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Employee from '../Employee';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ModalComponent {

  employee: Employee = {
    employeeId: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  };

  constructor(config: NgbModalConfig, private modalService: NgbModal, private rs : RestService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
  }

  addEmployee() {
    this.rs.createEmployees(this.employee).subscribe(() => location.reload());
  }

}

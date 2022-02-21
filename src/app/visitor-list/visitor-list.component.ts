import { Component, OnInit } from '@angular/core';
import { InputService } from '../../services/input.service';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css'],
})
export class VisitorListComponent implements OnInit {
  patientData: any = [];

  constructor(private inputService: InputService) {}

  ngOnInit(): void {
    this.getPatient();
  }

  getPatient() {
    this.inputService.getData().subscribe((data: any) => {
      this.patientData = data.data;
      console.log(this.patientData);
    });
  }
}

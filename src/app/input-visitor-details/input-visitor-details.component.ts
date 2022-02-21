import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validator } from '@angular/forms';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';
import { InputService } from '../../services/input.service';

@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.css']
})
export class InputVisitorDetailsComponent implements OnInit {

    createFormPatient!: FormGroup;
    createPatient: [] = []
 

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const date = cellDate.getDate();
      return date === 1 || date === 20 ? 'input-visitor-details.component.html' : '';
    }
    return '';
  };

  constructor() { }

  ngOnInit(): void {
  }

}

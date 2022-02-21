import { Component, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { InputService } from '../../services/input.service';

@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.css']
})
export class InputVisitorDetailsComponent implements OnInit {

  inputData = {
    name:'',
    fathersname:'',
    mothersname:'',
    huswifes:'',
    gender:'',
    birthdate:'',
    birthplace:'',
    address:'',
    zip:'',
    phone:'',
    religion:'',
    idcard:'',
    guarantee:'',
    healthservice:'',
    datechoose:''
  }
 

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const date = cellDate.getDate();
      return date === 1 || date === 20 ? 'input-visitor-details.component.html' : '';
    }
    return '';
  };

  constructor(private inputService:InputService) { }

  ngOnInit(): void {
  }

 



}

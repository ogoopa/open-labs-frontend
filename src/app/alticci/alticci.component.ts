
import { AlticciCalculateService } from '../alticci-calculate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alticci',
  templateUrl: './alticci.component.html',
  styleUrls: ['./alticci.component.css']
})
export class AlticciComponent implements OnInit {

  number!: Number;
  inputNumber!: Number;
  result: any;

  constructor(private alticciCalculateService: AlticciCalculateService) { }

  ngOnInit(): void {
  }

  calculate(inputNumber: Number) {
    let result: null;

    this.alticciCalculateService.calculate(inputNumber)
      .subscribe(inputNumber => {
        this.result = inputNumber
        return result
      });
  }

}

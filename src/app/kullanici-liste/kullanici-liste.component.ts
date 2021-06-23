import {Component, OnInit} from '@angular/core';
import {IlkObje} from '../models/ilkObje';

@Component({
  selector: 'app-kullanici-liste',
  templateUrl: './kullanici-liste.component.html',
  styleUrls: ['./kullanici-liste.component.scss']
})
export class KullaniciListeComponent implements OnInit {
  liste = [1, 1, 213, 1231, 12343, 12355, 654634, 54];
  objem1: IlkObje = new IlkObje();
  objem2: IlkObje = new IlkObje();
  objeList: IlkObje[] = [];

  constructor() {
    this.objem1.ad = 'qweqwe';
    this.objem1.id = 1;
    this.objem1.gsm = '454688';
    this.objem2.ad = 'q23123weqwe';
    this.objem2.id = 2;
    this.objem2.gsm = '123123';
    this.objeList.push(this.objem1);
    this.objeList.push(this.objem2);
  }

  ngOnInit(): void {
  }

}

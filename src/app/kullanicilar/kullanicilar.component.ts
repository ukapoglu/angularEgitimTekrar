import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-kullanicilar',
  templateUrl: './kullanicilar.component.html',
  styleUrls: ['./kullanicilar.component.scss']
})
export class KullanicilarComponent implements OnInit {
  sayi1 = 1;
  sayi2 = 10;
  sayi3 = 0;
  isim = 'Utku';
  soyisim = 'Kapoğlu';
  durum = false;
  isimSoyisim = '';

  constructor() {
    console.log('const');
    this.isimSoyisimNedir();
  }

  ngOnInit(): void {
    console.log('init');
  }


  isimSoyisimNedir(): string {
    console.log('2131');
    const q = this.isim + ' ' + this.soyisim;
    return q;

  }

  durumDegister(a: number): void {
    console.log(a);
    this.durum = !this.durum;
  }
}

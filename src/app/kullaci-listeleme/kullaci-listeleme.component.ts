import {Component, OnInit} from '@angular/core';
import {KullaniciModel} from '../models/kullanici.model';
import {HttpClient} from '@angular/common/http';
import {ApiServiceService} from '../services/api-service.service';
import {AlertifyService} from '../services/alertify.service';

@Component({
  selector: 'app-kullaci-listeleme',
  templateUrl: './kullaci-listeleme.component.html',
  styleUrls: ['./kullaci-listeleme.component.scss'],
})
export class KullaciListelemeComponent implements OnInit {
  users: KullaniciModel[] = [];
  state = 0;
  user: KullaniciModel = new KullaniciModel();
  isUpdate = 0;

  constructor(private apiService: ApiServiceService, private alert: AlertifyService) {
    this.kullaniciGetir();
  }

  kullaniciGetir(): void {
    this.apiService.getle('kullanici').subscribe(a => {
      // @ts-ignore
      this.users = a;
    });
  }

  ngOnInit(): void {
  }

  stateFn(s: number): void {
    this.state = s;
    console.log(this.user.id);
    if (this.state === 0) {
      // this.isUpdate = 0;
      this.user = new KullaniciModel();
    }
  }

  kaydetFn(b: boolean): void {
    this.isUpdate = b ? 1 : 2;
    this.user.gender = !(this.user.genderDTO === '0');
    let q;
    if (b) {
      q = this.apiService.putla('kullanici/' + this.user.id, this.user);
    } else {
      q = this.apiService.postla('kullanici', this.user);
    }
    q.subscribe(a => {
      if (b) {
        this.alert.warning('Kullanıcı güncellendi');
      } else {
        this.alert.success('Kullanıcı oluşturuldu');
      }
      this.stateFn(0);
      this.kullaniciGetir();
      this.user = new KullaniciModel();
    });
  }

  duzenleFn(u: KullaniciModel): void {
    u.gender ? u.genderDTO = '1' : u.genderDTO = '0';
    this.user = u;
    this.stateFn(2);
  }


}

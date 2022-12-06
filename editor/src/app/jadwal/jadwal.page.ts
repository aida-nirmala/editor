import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-jadwal',
  templateUrl: './jadwal.page.html',
  styleUrls: ['./jadwal.page.scss'],
})
export class JadwalPage implements OnInit {
  page = 0;
  perPage = 10;
  jadwal: any[] = [];
  lists: any[] = [];
  constructor(
    public _apiService: ApiService,
    private alertController: AlertController
  ) {}

  ionViewDidEnter() {
    console.log('jika selesai loading');
    this.page = 0;
    this.perPage = 10;
    this.getJadwal();
  }

  paginateArray() {
    this.page++;
    return this.jadwal.filter(
      (x) =>
        x.urutan_list > this.page * this.perPage - this.perPage &&
        x.urutan_list <= this.page * this.perPage
    );
  }

  ngOnInit() {}

  getJadwal() {
    this._apiService.tampil('tampilJadwal.php').subscribe({
      next: (res: any) => {
        console.log('sukses', res);
        this.jadwal = res;
        this.lists = this.paginateArray();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  doRefresh(event: any) {
    console.log('Mulai Refresh Konten');
    setTimeout(() => {
      console.log('Selesai Refresh Konten');
      event.target.complete();
      this.page = 0;
      this.perPage = 10;
      this.getJadwal();
    }, 2000);
  }

  loadMore(event: any) {
    console.log(event);
    setTimeout(() => {
      const array = this.paginateArray();
      console.log('new data: ', array);
      this.lists = this.lists.concat(array);
      console.log('list data: ', this.lists);
      event.target.complete();
      if (array?.length < this.perPage) {
        event.target.disabled = true;
      }
    }, 1000);
  }

  deleteJadwal(id: any) {
    this.alertController
      .create({
        header: 'perhatian',
        subHeader: 'Yakin menghapus data ini?',
        buttons: [
          {
            text: 'Batal',
            handler: (data: any) => {
              console.log('dibatalkan', data);
            },
          },
          {
            text: 'Yakin',
            handler: (data: any) => {
              //jika tekan yakin
              this._apiService.hapus(id, '/hapusJadwal.php?id=').subscribe({
                next: (res: any) => {
                  console.log('sukses', res);
                  this.page = 0;
                  this.perPage = 10;
                  this.getJadwal();
                },
                error: (error: any) => {
                  this._apiService.notif('gagal');
                },
              });
            },
          },
        ],
      })
      .then((res) => {
        res.present();
      });
  }
}

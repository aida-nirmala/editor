import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-jadwal-edit',
  templateUrl: './jadwal-edit.page.html',
  styleUrls: ['./jadwal-edit.page.scss'],
})
export class JadwalEditPage implements OnInit {
  id: any;
  tanggal: any;
  hari: any;
  jam: any;
  mata_kuliah: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService
  ) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      console.log(this.id);
      this.ambilJadwal(this.id);
    });
  }

  ngOnInit() {}

  ambilJadwal(id: any) {
    this._apiService.lihat(id, '/lihatJadwal.php?id=').subscribe({
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let jadwal = hasil;
        this.tanggal = jadwal.tanggal;
        this.hari = jadwal.hari;
        this.jam = jadwal.jam;
        this.mata_kuliah = jadwal.mata_kuliah;
      },
      error: (error: any) => {
        this._apiService.notif('gagal ambil data');
      },
    });
  }

  editJadwal() {
    let data = {
      id: this.id,
      tanggal: this.tanggal,
      hari: this.hari,
      jam: this.jam,
      mata_kuliah: this.mata_kuliah,
    };
    this._apiService.edit(data, '/editJadwal.php').subscribe({
      next: (hasil: any) => {
        console.log(hasil);
        this.id = '';
        this.tanggal = '';
        this.hari = '';
        this.jam = '';
        this.mata_kuliah = '';
        this._apiService.notif('berhasil edit Jadwal');
        this.router.navigateByUrl('/jadwal');
      },
      error: (err: any) => {
        this._apiService.notif('gagal edit Jadwal');
      },
    });
  }
}

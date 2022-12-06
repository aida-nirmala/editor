import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-jadwal-tambah',
  templateUrl: './jadwal-tambah.page.html',
  styleUrls: ['./jadwal-tambah.page.scss'],
})
export class JadwalTambahPage implements OnInit {
  id: any;
  tanggal: any;
  hari: any;
  jam: any;
  mata_kuliah: any;
  constructor(private router: Router, public _apiService: ApiService) {}

  ngOnInit() {}

  addJadwal() {
    let data = {
      tanggal: this.tanggal,
      hari: this.hari,
      jam: this.jam,
      mata_kuliah: this.mata_kuliah,
    };
    this._apiService.tambah(data, '/tambahJadwal.php').subscribe({
      next: (hasil: any) => {
        console.log(hasil);
        this.id = '';
        this.tanggal = '';
        this.hari = '';
        this.jam = '';
        this.mata_kuliah = '';
        this._apiService.notif('berhasil input Jadwal');
        this.router.navigateByUrl('/jadwal');
      },
      error: (err: any) => {
        this._apiService.notif('gagal input Jadwal');
      },
    });
  }
}

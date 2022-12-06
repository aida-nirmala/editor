<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$pesan = [];
$tanggal = trim($data['tanggal']);
$hari = trim($data['hari']);
$jam = trim($data['jam']);
$mata_kuliah = trim($data['mata_kuliah']);
//jika nama tanggal dan hari dan jam dan mata_kuliah tidak kosong
if ($tanggal != '' and $hari != '' and $jam != '' and $mata_kuliah !='') {
$query = mysqli_query($koneksi, "insert into jadwal(tanggal, hari, jam, mata_kuliah) values('$tanggal','$hari', '$jam', '$mata_kuliah')");
$pesan['status'] = 'berhasil';
} else {
$pesan['status'] = 'gagal';
}
echo json_encode($pesan);
echo mysqli_error($koneksi);
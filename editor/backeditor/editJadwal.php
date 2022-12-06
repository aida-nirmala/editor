<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$pesan = [];
$id = trim($data['id']);
$tanggal = trim($data['tanggal']);
$hari = trim($data['hari']);
$jam = trim($data['jam']);
$mata_kuliah = trim($data['mata_kuliah']);
//jika nama matakuliah dan keterangan tidak kosong
if ($tanggal != '' and $hari != '' and $jam != '' and $mata_kuliah !='') {
$query = mysqli_query($koneksi, "update jadwal set tanggal='$tanggal',hari='$hari',jam='$jam',mata_kuliah='$mata_kuliah' where id='$id'");
$pesan['status'] = 'berhasil';
} else {
$pesan['status'] = 'gagal';
}
echo json_encode($pesan);
echo mysqli_error($koneksi);
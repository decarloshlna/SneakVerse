<?php
// test_db.php
include 'koneksi.php';

// Cek koneksi dulu
if (!$conn) {
    die("KONEKSI MATI: " . mysqli_connect_error());
} else {
    echo "<h1>Koneksi Database: BERHASIL ✅</h1>";
}

// Coba Insert Data Dummy
$sql = "INSERT INTO orders (customer_name, customer_address, customer_phone, payment_method, product_name, product_price) 
        VALUES ('TES USER', 'TES ALAMAT', '08123456789', 'COD', 'SEPATU TES', '100000')";

if (mysqli_query($conn, $sql)) {
    echo "<h1>Insert Data: BERHASIL ✅</h1>";
    echo "<p>Coba cek phpMyAdmin, harusnya ada data baru.</p>";
} else {
    echo "<h1>Insert Data: GAGAL ❌</h1>";
    echo "<p>Errornya: " . mysqli_error($conn) . "</p>";
}
?>
<?php
// checkout.php
header('Content-Type: application/json');

// 1. Panggil file koneksi database
include 'koneksi.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // 2. Ambil data dan amankan (supaya tidak error tanda kutip, dll)
    $nama    = mysqli_real_escape_string($conn, $_POST['customer_name']);
    $alamat  = mysqli_real_escape_string($conn, $_POST['customer_address']);
    $telepon = mysqli_real_escape_string($conn, $_POST['customer_phone']);
    $metode  = mysqli_real_escape_string($conn, $_POST['payment_method']);
    $produk  = mysqli_real_escape_string($conn, $_POST['product_name']);
    $harga   = mysqli_real_escape_string($conn, $_POST['product_price']);

    // Validasi sederhana
    if(empty($nama) || empty($telepon) || empty($alamat) || empty($produk)) {
        echo json_encode(["status" => "error", "message" => "Data tidak lengkap."]);
        exit;
    }

    // 3. Query INSERT untuk menyimpan ke database
    $sql = "INSERT INTO orders (customer_name, customer_address, customer_phone, payment_method, product_name, product_price) 
            VALUES ('$nama', '$alamat', '$telepon', '$metode', '$produk', '$harga')";

    // 4. Eksekusi Query
    if (mysqli_query($conn, $sql)) {
        echo json_encode([
            "status" => "success",
            "message" => "Pesanan $produk berhasil disimpan! Kami akan menghubungi $telepon."
        ]);
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Gagal menyimpan ke database: " . mysqli_error($conn)
        ]);
    }

} else {
    echo json_encode(["status" => "error", "message" => "Akses dilarang"]);
}
?>
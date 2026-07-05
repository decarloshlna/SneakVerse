<?php
// register.php
header('Content-Type: application/json');
include 'koneksi.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // 1. Ambil SEMUA data dari form
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    $fullName = mysqli_real_escape_string($conn, $_POST['full_name']);
    $address  = mysqli_real_escape_string($conn, $_POST['address']);
    $phone    = mysqli_real_escape_string($conn, $_POST['phone']);

    // 2. Cek Username
    $check = mysqli_query($conn, "SELECT username FROM users WHERE username = '$username'");
    if(mysqli_num_rows($check) > 0){
        echo json_encode(["status" => "error", "message" => "Username sudah dipakai!"]);
        exit;
    }

    // 3. Enkripsi Password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // 4. Masukkan ke Database (Sekarang lengkap)
    $sql = "INSERT INTO users (username, password, full_name, address, phone) 
            VALUES ('$username', '$hashed_password', '$fullName', '$address', '$phone')";

    if (mysqli_query($conn, $sql)) {
        echo json_encode(["status" => "success", "message" => "Registrasi Berhasil! Silakan Login."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Gagal Daftar: " . mysqli_error($conn)]);
    }
}
?>
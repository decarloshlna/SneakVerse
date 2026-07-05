<?php
header('Content-Type: application/json');
include 'koneksi.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    // 1. Cari user berdasarkan username
    $query = mysqli_query($conn, "SELECT * FROM users WHERE username = '$username'");
    $user = mysqli_fetch_assoc($query);

    // 2. Cek apakah user ketemu DAN password cocok
    if ($user && password_verify($password, $user['password'])) {
        
        // Buat data untuk dikirim balik ke JS (Jangan kirim passwordnya!)
        $userData = [
            "id" => $user['id'],
            "username" => $user['username'],
            "fullName" => $user['full_name'],
            "address" => $user['address'],
            "phone" => $user['phone']
        ];

        echo json_encode([
            "status" => "success", 
            "message" => "Login Berhasil!",
            "data" => $userData
        ]);

    } else {
        echo json_encode(["status" => "error", "message" => "Username atau Password salah!"]);
    }
}
?>
<?php
// update_profile.php
header('Content-Type: application/json');
include 'koneksi.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = mysqli_real_escape_string($conn, $_POST['username']); 
    $fullName = mysqli_real_escape_string($conn, $_POST['fullName']);
    $address  = mysqli_real_escape_string($conn, $_POST['address']);
    $phone    = mysqli_real_escape_string($conn, $_POST['phone']); // Tangkap Phone

    // Update Query (Pastikan phone ikut diupdate)
    $sql = "UPDATE users SET full_name = '$fullName', address = '$address', phone = '$phone' WHERE username = '$username'";

    if (mysqli_query($conn, $sql)) {
        // Ambil data terbaru untuk dikirim balik ke layar
        $query = mysqli_query($conn, "SELECT * FROM users WHERE username = '$username'");
        $updatedUser = mysqli_fetch_assoc($query);

        $userData = [
            "id" => $updatedUser['id'],
            "username" => $updatedUser['username'],
            "fullName" => $updatedUser['full_name'],
            "address" => $updatedUser['address'],
            "phone" => $updatedUser['phone']
        ];

        echo json_encode([
            "status" => "success", 
            "message" => "Profil Berhasil Diupdate!",
            "data" => $userData
        ]);

    } else {
        echo json_encode(["status" => "error", "message" => "Gagal Update: " . mysqli_error($conn)]);
    }
}
?>
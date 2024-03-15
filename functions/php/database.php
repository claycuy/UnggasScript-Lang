<?php
$hostname = $_GET['hostname'];
$username = $_GET['username'];
$password = $_GET['password'];
$database = $_GET['database'];

// Disimpan ke file konfigurasi atau database jika perlu
// Misalnya, simpan ke file JSON
$config = array(
    'hostname' => $hostname,
    'username' => $username,
    'password' => $password,
    'database' => $database
);
file_put_contents('config.json', json_encode($config));

echo "Konfigurasi PHP berhasil diset.";
?>

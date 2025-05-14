<?php
// 1. Connect to MySQL database
$conn = new mysqli("localhost", "root", "", "gymdb");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$conn->set_charset("utf8"); // Optional: Set character encoding

// 2. Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$plan = $_POST['plan'];
$height = $_POST['height'];
$weight = $_POST['weight'];

// 3. Insert using prepared statement
$stmt = $conn->prepare("INSERT INTO gym_member (Name, `E-mail`, `Phone.No`, Plan, Height, Weight) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssii", $name, $email, $phone, $plan, $height, $weight);

// 4. Execute
if ($stmt->execute()) {
    echo "✅ Registration successful!";
} else {
    echo "❌ Error: " . $stmt->error;
}

// 5. Close connection
$stmt->close();
$conn->close();
?>

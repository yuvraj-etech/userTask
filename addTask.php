<?php
require 'conn.php';

$taskName = $_POST['taskName'];
$dueDate = $_POST['dueDate'];
$userEmail = $_POST['userEmail'];


    $sql = "INSERT INTO assign9_task (task_name, due_date, userEmail) VALUES ('$taskName', '$dueDate', '$userEmail')";

    if (mysqli_query($conn, $sql)) {
        echo "Task Added";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }


mysqli_close($conn);
?>
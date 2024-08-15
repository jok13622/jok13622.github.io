// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ป้องกันการส่งฟอร์ม

    // เก็บข้อมูลล็อกอินที่ถูกต้อง
    const validUsername = 'user';
    const validPassword = 'password';

    // ดึงข้อมูลจากฟอร์ม
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // เปรียบเทียบข้อมูลล็อกอิน
    if (username === validUsername && password === validPassword) {
        message.textContent = 'Login successful!';
        message.style.color = 'green';
        // การดำเนินการหลังจากล็อกอินสำเร็จ เช่น การเปลี่ยนหน้า
        // window.location.href = 'dashboard.html'; // ตัวอย่าง
    } else {
        message.textContent = 'Invalid username or password';
        message.style.color = 'red';
    }
});

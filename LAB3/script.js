// script.js
document.addEventListener('DOMContentLoaded', function() {
    const numberOfFiles = 10;
    const fileInputsContainer = document.getElementById('fileInputs');

    // สร้างฟิลด์สำหรับการอัปโหลดไฟล์
    for (let i = 0; i < numberOfFiles; i++) {
        const div = document.createElement('div');
        div.classList.add('file-group');
        
        const label = document.createElement('label');
        label.textContent = `File ${i + 1}:`;
        
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.pdf, .jpg, .jpeg';
        input.name = `file${i + 1}`;

        div.appendChild(label);
        div.appendChild(input);
        fileInputsContainer.appendChild(div);
    }

    // ตรวจสอบและส่งฟอร์ม
    document.getElementById('uploadForm').addEventListener('submit', function(event) {
        event.preventDefault(); // ป้องกันการส่งฟอร์มจริง

        const files = document.querySelectorAll('input[type="file"]');
        const status = document.getElementById('status');

        let allFilesValid = true;

        files.forEach(fileInput => {
            if (fileInput.files.length === 0) {
                allFilesValid = false;
                status.textContent = 'Please upload all files.';
                status.style.color = 'red';
                return;
            }
            
            const file = fileInput.files[0];
            const fileType = file.type;
            if (!['application/pdf', 'image/jpeg'].includes(fileType)) {
                allFilesValid = false;
                status.textContent = 'Invalid file type. Only PDF and JPG/JPEG files are allowed.';
                status.style.color = 'red';
                return;
            }
        });

        if (allFilesValid) {
            status.textContent = 'Files are valid and ready for upload!';
            status.style.color = 'green';
            // ดำเนินการอัปโหลดฟอร์มที่นี่
            // เช่น: form.submit(); หรือใช้ AJAX
        }
    });
});

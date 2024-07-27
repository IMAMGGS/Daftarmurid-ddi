// script.js
document.addEventListener('DOMContentLoaded', () => {
    const students = document.querySelectorAll('.student');
    students.forEach((student, index) => {
        setTimeout(() => {
            student.classList.add('show');
        }, index * 500); // 500ms interval between each animation
    });
});

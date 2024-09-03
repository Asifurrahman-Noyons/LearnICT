// Array of colors for each chapter
const colors = ['#FDE2DD', '#FDDCEE', '#DAD5FD', '#DBFFD9', '#FFF1BA', '#CDE7FE'];

// Select all elements with the class 'chapter'
const chapters = document.querySelectorAll('.chapter');

// Apply different background colors to each chapter
chapters.forEach((chapter, index) => {
    chapter.style.backgroundColor = colors[index];
});

// Bottom navigation
const navLinks = document.querySelectorAll('.bottom-nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('selected'));
        this.classList.add('selected');
    });
});

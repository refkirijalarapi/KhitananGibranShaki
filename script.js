document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      const offset = document.querySelector('nav').offsetHeight; // Tinggi dari navbar

      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition - offset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });

  
// Function untuk filter kartu berdasarkan kategori dengan animasi
function filterCategory(category) {
    const cards = document.querySelectorAll('.template-card'); // Semua kartu
    const activeButton = document.querySelector('.title-kategori-tamplate .btn-pink'); // Tombol aktif
    const targetButton = document.getElementById(`${category}-btn`); // Tombol kategori yang dipilih
    
    // Loop untuk menyembunyikan/menampilkan kartu sesuai kategori
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.classList.remove('fade-out'); // Tampilkan kartu (fade in)
            setTimeout(() => {
                card.style.display = 'block'; // Setelah animasi selesai, ubah display menjadi block
            }, 500); // Waktu yang sama dengan durasi animasi CSS
        } else {
            card.classList.add('fade-out'); // Tambahkan kelas fade-out (fade out)
            setTimeout(() => {
                card.style.display = 'none'; // Setelah animasi selesai, ubah display menjadi none
            }, 500); // Waktu yang sama dengan durasi animasi CSS
        }
    });

    // Jika ada tombol yang aktif, hapus kelas 'btn-pink'
    if (activeButton) {
        activeButton.classList.remove('btn-pink');
    }

    // Tambahkan kelas 'btn-pink' ke tombol yang dipilih
    if (targetButton) {
        targetButton.classList.add('btn-pink');
    }
}

// Event listener untuk tombol kategori
document.getElementById('pernikahan-btn').addEventListener('click', function() {
    filterCategory('pernikahan');
});

document.getElementById('khitan-btn').addEventListener('click', function() {
    filterCategory('khitan');
});

document.getElementById('all-btn').addEventListener('click', function() {
    filterCategory('all');
});

// Set default category ke "all" ketika halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    filterCategory('all');
});
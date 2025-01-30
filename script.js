// Ambil semua elemen gambar
const photoItems = document.querySelectorAll('.photo-item img');

// Tambahkan event listener untuk setiap gambar
photoItems.forEach(img => {
  img.addEventListener('click', function() {
    // Cek apakah gambar sudah terbuka
    if (this.classList.contains('clicked')) {
      this.classList.remove('clicked'); // Jika sudah terbuka, tutup
    } else {
      // Tutup semua gambar lain sebelum membuka yang baru
      photoItems.forEach(item => item.classList.remove('clicked'));
      this.classList.add('clicked'); // Tambahkan efek ke gambar yang diklik
    }
  });
});

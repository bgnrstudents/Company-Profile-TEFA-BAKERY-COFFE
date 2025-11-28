<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  <link rel="stylesheet" href="css/style.css?v=<?php echo time(); ?>" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
  <title>Hello, world!</title>
</head>

<body>
  <!-- Navbar -->
  <?php include 'includes/navbar.php'; ?>

  <!-- HOME -->
  <section id="home" class="hero">
    <div class="container hero-container">
      <div class="row align-items-center g-4">

        <!-- KIRI: JUDUL & GAMBAR FLOATING -->
        <div class="col-lg-6 col-md-12 mb-sm-5">
          <div class="hero-left">
            <div class="hero-content">
              <div class="floating-images">
                <img src="img/coffe.png" alt="Kopi" class="float-img img-coffee img-fluid">
                <img src="img/bakery.png" alt="Roti" class="float-img img-bakery img-fluid">
              </div>
              <h1 class="hero-title">TEFA <span>Bakery & Coffee</span></h1>
            </div>
          </div>
        </div>

        <!-- KANAN: PROFILE & SEJARAH -->
        <div class="col-lg-6 col-md-12">
          <div class="hero-right">

            <div class="profile card ">
              <div class="card-body">
                <h2 class="card-title text-center mb-3 text-profile">PROFILE</h2>
                <p class="card-text">TEFA Bakery and Coffee Politeknik Negeri Jember merupakan fasilitas praktik pembelajaran bagi mahasiswa yang fokus pada industri bakery dan coffee shop. Melalui TEFA ini, mahasiswa dapat belajar secara langsung proses produksi roti dan pastry, teknik meracik kopi, hingga manajemen usaha café dan bakery. Selain mendukung keterampilan praktis, TEFA Bakery and Coffee juga melayani pembelian produk untuk umum sehingga mahasiswa dapat merasakan suasana kerja riil dengan standar industry.</p>
              </div>
            </div>

            <div class="history card ">
              <div class="card-body">
                <h2 class="card-title text-center mb-3 text-sejarah">SEJARAH</h2>
                <p class="card-text">Sejarah berdirinya Tefa Coffee and Bakery dimulai pada tahun 2019, ketika unit ini resmi dirancang dan dikembangkan sebagai salah satu teaching factory di bawah Politeknik Negeri Jember.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
  <!-- END HOME -->

  <!-- VISI MISi -->
  <section class="py-5 visi-misi">
    <div class="container" style="max-width: 1200px;">
      <div class="row justify-content-center gap-5 m-sm-5 m-lg-0">

        <!-- KOLOM KIRI: VISI -->
        <div class="col-lg-5 col-12 mb-lg-0 img-visi-misi">
          <div class="d-flex flex-column gap-3">
            <h4 class="text-center fw-bold text-visi">VISI</h4>
            <p class="text-justify text-p-visi">
              Kopi adalah minuman yang diseduh dari biji tanaman kopi tropis yang telah disangrai dan dihaluskan menjadi bubuk. Minuman ini mengandung kafein yang berfungsi sebagai stimulan dan merupakan salah satu minuman paling populer
            </p>
            <img src="img/visi.jpg" class="img-fluid img-visi rounded-4  mx-auto" alt="Visi" style="width: 350px; height:300px;">
          </div>
        </div>

        <!-- KOLOM KANAN: MISI -->
        <div class="col-lg-5 col-12 mb-5 mb-lg-0 img-visi-misi">
          <div class="d-flex flex-column gap-3">
            <img src="img/misi.jpg" class="img-fluid img-misi rounded-4  mx-auto" alt="Misi" style="width: 350px; height:300px;">
            <h4 class="text-center text-misi pt-3">MISI</h4>
            <p class="text-justify text-p-misi">
              Kopi adalah minuman yang diseduh dari biji tanaman kopi tropis yang telah disangrai dan dihaluskan menjadi bubuk. Minuman ini mengandung kafein yang berfungsi sebagai stimulan dan merupakan salah satu minuman paling populer
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
  <!-- END VISI MISi -->

  <!-- MENU -->
  <section id="menu" class="menusection py-5 bg-light">
    <h2 class="h2-menu text-center ">MENU</h2>
    <div class="container-fluid"> 

      <div class="row justify-content-center align-items-center bg-menu py-7 gap-5"> 

        <!-- MAKANAN -->
        <div class="col-10 col-sm-9 col-md-5 col-lg-4"> 
          <a href="makanan.php" class="link-menu text-decoration-none d-block">
            <div class="menu-makanan ratio ratio-1x1 overflow-hidden">
              <div class="d-flex p-4">
                <h3 class="mb-0">MAKANAN</h3>
              </div>
            </div>
          </a>
        </div>

        <!-- MINUMAN -->
        <div class="col-10 col-sm-9 col-md-5 col-lg-4">
          <a href="minuman.php" class="link-menu text-decoration-none d-block">
            <div class="menu-minuman ratio ratio-1x1 rounded-5 overflow-hidden">
              <div class="d-flex p-4">
                <h3 class="mb-0">MINUMAN</h3>
              </div>
            </div>
          </a>
        </div>

      </div>
    </div>
  </section>
  <!-- END MENU -->

  <!-- PROGRAM -->
  <section class="program py-5">
    <div class="container">
      <h3 class="text-center text-program mb-5">PROGRAM</h3>
      <div class="d-lg-flex justify-content-center gap-4 gap-lg-5">
        <a href="#" class="text-decoration-none">
          <div class="img-program-1 mx-auto mb-4 mb-lg-0">
            <h3>Kunjungan</h3>
          </div>
        </a>
        <a href="#" class="text-decoration-none">
          <div class="img-program-2 mx-auto mb-4 mb-lg-0">
            <h3>Magang</h3>
          </div>
        </a>
        <a href="#" class="text-decoration-none">
          <div class="img-program-3 mx-auto mb-4 mb-lg-0">
            <h3>Catering</h3>
          </div>
        </a>
      </div>
    </div>
  </section>
  <!-- END PROGRAM -->
  <!-- ULASAN -->
  <section class="ulasan py-5">
    <div class="container">
      <h2 class="text-center mb-5 h2-ulasan">RATING & ULASAN</h2>
      <div class="row justify-content-center g-4">

        <!-- KOLOM KIRI: FORM INPUT -->
        <div class="col-lg-5 col-md-6 col-12 ">
          <div class="form-container p-4 shadow-lg form-ulasan">
            <h4 class="text-center mb-2 h4-ulasan">RATING & ULASAN</h4>

            <form id="reviewForm">

              <!-- STAR RATING -->
              <div class="mb-3">
                <div class="rating-stars  d-flex justify-content-center">
                  <span class="star" data-value="1">☆</span>
                  <span class="star" data-value="2">☆</span>
                  <span class="star" data-value="3">☆</span>
                  <span class="star" data-value="4">☆</span>
                  <span class="star" data-value="5">☆</span>
                </div>
                <input type="hidden" id="ratingValue" name="rating" required>
              </div>

              <!-- INPUT NAMA -->
              <div class="mb-3">
                <label for="nama" class="form-label">Nama</label>
                <input type="text" class="form-control input-ulasan p-3"  id="nama" name="nama" placeholder="Masukkan Nama Anda" required>
              </div>

              <!-- TEXTAREA ULASAN -->
              <div class="mb-3">
                <label for="ulasan" class="form-label">Ulasan</label>
                <textarea class="form-control textarea-ulasan" id="ulasan" name="ulasan" rows="5" placeholder="Tulis ulasan Anda di sini..." required></textarea>
              </div>

              <!-- BUTTON SUBMIT -->
              <div class="d-flex justify-content-end">
                <button type="submit" class="btn-ulasan text-center"> SUBMIT </button>
              </div>
            </form>
          </div>
        </div>

        <!-- KOLOM KANAN: DISPLAY ULASAN -->
        <div class="col-lg-5 col-md-6 col-12">
          <div class="ulasan-container p-4 rounded-3 shadow">
            <h4 class="text-center mb-4">Ulasan Pelanggan</h4>


          </div>
        </div>

      </div>
    </div>
  </section>
  <!-- EnD ULASAN -->
  <!-- Footer -->
  <?php include 'includes/footer.php'; ?>

  <!-- SCRIPT JS BOSTRAPP -->
  <script src="js/script.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>

</html>
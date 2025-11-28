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

  <div class="container">
    <div class="row g-4 align-items-start">

      <!-- TEXT -->
      <div class="col-lg-8 col-12">
        <h1 class="mt-5 h1-program">PROGRAM KUNJUNGAN</h1>
          <p class="p-program">
            Program kunjungan ke TEFA Bakery & Coffe adalah kegiatan edukasi dan outing class
            yang dirancang untuk memberikan pengalaman langsung kepada siswa (mulai dari SD hingga SMK)
            mengenal proses produksi roti dan kopi ala industri, manajemen usaha, hingga praktik kewirausahaan
            yang diterapkan di Teaching Factory (Tefa) Polije.
          </p>
      </div>

      <!-- QR CARD -->
      <div class="col-lg-3 qr-align col-7 m-auto ">
        <div class="qr-card d-flex flex-column mt-5">
          <div class="qr-box ">
            <img src="images/Screenshot (227).png" alt="QR Code">
          </div>
          <div class="qr-text">SCAN UNTUK BERGABUNG</div>
        </div>
      </div>
    </div>

    <!-- THUMBNAIL ROW -->
    <div class="row mt-4 g-3 mb-5">
      <div class="col-md-4">
        <img src="images/img1.jpg" class="thumb-img">
      </div>
      <div class="col-md-4">
        <img src="images/img2.jpg" class="thumb-img">
      </div>
      <div class="col-md-4">
        <img src="images/img3.jpg" class="thumb-img">
      </div>
    </div>

  </div>

  <!-- Footer -->
  <?php include 'includes/footer.php'; ?>

  <!-- SCRIPT JS BOSTRAPP -->
  <script src="js/script.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>

</html>
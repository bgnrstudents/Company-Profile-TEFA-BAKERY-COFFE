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
  <?php include 'includes/navbar.php'  ?>
<div class="container">
    <div class="row g-4 align-items-start">
        
        <!-- TEXT -->
        <div class="col-lg-8 col-12">
            <h1 class="mt-5 h1-program">PROGRAM MAGANG</h1>
            <p class="p-program">
              Program magang di TEFA Bakery & Coffe adalah Praktik Kerja Lapangan (PKL) yang bertujuan mengembangkan pengetahuan dan keterampilan mahasiswa di dunia kerja industri pangan, mulai dari proses produksi hingga pengemasan produk roti dan kopi, serta meningkatkan jiwa kewirausahaan mahasiswa melalui pengalaman langsung di unit bisnis Teaching Factor. Tidak hanya menerima peserta mahasiswa saja, tapi kami juga menerima peserta magang dari tingkat SMK.
            </p>
        </div>

        <!-- QR CARD -->
        <div class="col-lg-3 qr-align col-7 m-auto">
            <div class="qr-card d-flex flex-column ">
                <div class="qr-box ">
                    <img src="imgmagang/QR.png" alt="QR Code">
                </div>
                <div class="qr-text">SCAN UNTUK BERGABUNG</div>
            </div>
        </div>
    </div>

    <!-- THUMBNAIL ROW -->
    <div class="row mt-4 g-3 mb-5">
        <div class="col-md-4">
            <img src="imgmagang/foto-magang1.jpeg" class="thumb-img">
        </div>
        <div class="col-md-4">
            <img src="imgmagang/foto-magang3.png" class="thumb-img">
        </div>
        <div class="col-md-4">
            <img src="imgmagang/foto-magang2.jpeg" class="thumb-img">
        </div>
    </div>

</div>

<!-- FOOTER -->
   <?php include 'includes/footer.php'  ?>
  <!-- SCRIPT JS BOSTRAPP -->
  <script src="js/script.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>

</html>
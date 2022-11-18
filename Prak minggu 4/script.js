const tentang_html = `<h2 id="tentang">Tentang Saya</h2>
<div class="text">
  <p>
    Perkenalkan nama saya Rendy Prayoga biasa dipanggil Rendy,
    saya seorang mahasiswa dari Institut Teknologi Sumatera
    (ITERA). di ITERA saya mengambil Prodi Teknik Informatika
    sejak tahun 2020
  </p>
</div>`;
const riwayatSAYA = `<h2 id="riwayat">Riwayat pendidikan</h2>
<div class="kolom">
  <table border="1">
    <thead>
      <tr>
        <th rowspan="2">#</th>
        <th rowspan="2">POSISI</th>
        <th rowspan="2">PERUSAHAAN</th>
        <th colspan="2">WAKTU</th>
      </tr>
      <tr>
        <th>MULAI</th>
        <th>SELESAI</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td v-align="center">1</td>
        <td>Lorem Ipsum Dolor</td>
        <td>Dicta Modi Malores</td>
        <td>1928</td>
        <td>1973</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Id Provident Excepturi</td>
        <td>Veniam Doloras Adipisci</td>
        <td>1945</td>
        <td>1973</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Repellendus Debitis Iste</td>
        <td>Adipisicing Elit Accusamous</td>
        <td>1973</td>
        <td>1982</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Corporis Quidem Iure</td>
        <td>Adipisicing Elit Accusamous</td>
        <td>1982</td>
        <td>2022</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Tenetur Nisi Architecto</td>
        <td>Lorem ipsum</td>
        <td>2022</td>
        <td>2200</td>
      </tr>
    </tbody>
  </table>
</div>`;
const hubungiSAYA = `<h2 id="hubungi">Hubungi Saya</h2>
<div class="hubungi">
  <form action="index.html" method="GET">
    <div class="nama">
      <label>Nama </label>
      <input type="text" id="fname" />
    </div>
    <div class="nonton">
      <label for="pil">Sudah melihat produk saya?</label>
      <div>
        <input
          type="radio"
          name="sudah"
          id="sudah"
          value="sudah"
        />
        <label>Sudah</label>
        <input
          type="radio"
          name="sudah"
          id="belum"
          value="belum"
        />
        <label>Belum</label>
      </div>
    </div>
    <button class="submit" type="submit">KIRIM</button>
  </form>
</div>`;
function tampil() {
  const tabel = document.getElementById("tabel");
  tabel.classList.remove("tabel");
  tabel.classList.add("tabel");
  const judul = document.getElementById("judul");
  judul.innerText = "My Portofolio";
  const main = document.getElementById("main");
  main.innerHTML = ` <img src="rendy.png" alt />
  <h1>Rendy Prayoga</h1>
  <nav>
    <ul>
      <a href="#" onclick="tentang()">Tentang Saya</a>
      <a href="#" onclick="riwayat()">Riwayat Pendidikan</a>
      <a href="#" onclick="hubungi()">Hubungi Saya</a>
    </ul>
  </nav>
  <div id="content">${tentang_html}${riwayatSAYA}${hubungiSAYA}</div> `;
  const footer = document.getElementById("footer");
  footer.innerHTML =
    "<a href='https://www.instagram.com/prayogarendy_/'>instagram</a>";
}
function tentang() {
  const content = document.getElementById("content");
  content.innerHTML = `${tentang_html}${riwayatSAYA}${hubungiSAYA}`;
}
function riwayat() {
  const content = document.getElementById("content");
  content.innerHTML = riwayatSAYA;
}
function hubungi() {
  const content = document.getElementById("content");
  content.innerHTML = hubungiSAYA;
}

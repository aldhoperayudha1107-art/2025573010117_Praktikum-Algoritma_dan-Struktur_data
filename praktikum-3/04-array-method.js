// 04-array-method.js
// ================================================
// METHOD ITERASI: forEach, map, filter, reduce
// ================================================

const nilaiMahasiswa = [75, 90, 55, 82, 68, 95, 48, 77];

// --- 1. forEach: menjalankan sesuatu untuk setiap elemen ---
console.log("=== forEach: Tampilkan Semua Nilai ===");
nilaiMahasiswa.forEach((nilai, indeks) => {
  console.log(` Mahasiswa-${indeks + 1}: ${nilai}`);
});

// --- 2. map: transformasi setiap elemen menjadi nilai baru ---
// Konversi nilai angka ke grade huruf
const gradeHuruf = nilaiMahasiswa.map((nilai) => {
  if (nilai >= 90) return "A";
  if (nilai >= 80) return "B";
  if (nilai >= 70) return "C";
  if (nilai >= 60) return "D";
  return "E";
});

console.log("\n=== map: Nilai ke Grade ===");
console.log("Nilai :", nilaiMahasiswa);
console.log("Grade :", gradeHuruf);

// --- 3. filter: saring elemen yang memenuhi kondisi ---
const nilaiLulus = nilaiMahasiswa.filter((nilai) => nilai >= 60);
const nilaiGagal = nilaiMahasiswa.filter((nilai) => nilai < 60);

console.log("\n=== filter: Lulus dan Tidak Lulus ===");
console.log("Semua nilai :", nilaiMahasiswa);
console.log("Nilai lulus :", nilaiLulus);
console.log("Nilai gagal :", nilaiGagal);

// --- 4. reduce: mereduksi array menjadi satu nilai ---
const totalNilai = nilaiMahasiswa.reduce((akumulator, nilai) => {
  return akumulator + nilai;
}, 0); // 0 adalah nilai awal akumulator

const rataRata = totalNilai / nilaiMahasiswa.length;

console.log("\n=== reduce: Statistik Nilai ===");
console.log("Total nilai :", totalNilai);
console.log("Rata-rata :", rataRata.toFixed(2));

// --- 5. Menggabungkan beberapa method (method chaining) ---
const rataRataNilaiLulus = nilaiMahasiswa
  .filter((nilai) => nilai >= 60) // ambil yang lulus dulu
  .reduce((acc, val, idx, arr) => {
    return acc + val / arr.length; // bagi saat proses
  }, 0);

console.log("\n=== Method Chaining ===");
console.log("Rata-rata nilai lulus:", rataRataNilaiLulus.toFixed(2));

// 2 & 3. Array of objects produk
const produk = [
  { nama: "Laptop", harga: 8500000, stok: 5 },
  { nama: "Mouse", harga: 150000, stok: 0 },
  { nama: "Keyboard", harga: 450000, stok: 12 },
  { nama: "Monitor", harga: 3200000, stok: 0 },
  { nama: "Headset", harga: 350000, stok: 8 },
];

// 4. Filter produk yang tersedia (stok > 0)
const produkTersedia = produk.filter((p) => p.stok > 0);

console.log("=== Produk Tersedia ===");
console.log(produkTersedia);

// 5. Ambil hanya nama produk
const namaProduk = produkTersedia.map((p) => p.nama);

console.log("\n=== Nama Produk Tersedia ===");
console.log(namaProduk);

// 6. Hitung total nilai inventaris
const totalInventaris = produkTersedia.reduce((total, p) => {
  return total + p.harga * p.stok;
}, 0);

console.log("\n=== Total Nilai Inventaris ===");
console.log(`Rp${totalInventaris.toLocaleString("id-ID")}`);

// 7. Tampilkan semua produk dengan format rapi
console.log("\n=== Daftar Produk ===");
produk.forEach((p) => {
  if (p.stok > 0) {
    console.log(
      `[TERSEDIA] ${p.nama} - Rp${p.harga.toLocaleString("id-ID")} (${p.stok} unit)`,
    );
  } else {
    console.log(`[HABIS] ${p.nama} - Rp${p.harga.toLocaleString("id-ID")}`);
  }
});

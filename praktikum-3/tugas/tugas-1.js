// 2. Array data mahasiswa
const dataMahasiswa = [
  { nama: "Aldo", nilai: 85 },
  { nama: "Budi", nilai: 70 },
  { nama: "Citra", nilai: 90 },
  { nama: "Dewi", nilai: 60 },
  { nama: "Eka", nilai: 75 },
  { nama: "Fajar", nilai: 50 },
];

// 3. Function hitung statistik (pakai reduce)
function hitungStatistik(arrMahasiswa) {
  const hasil = arrMahasiswa.reduce(
    (acc, curr) => {
      acc.total++;
      acc.totalNilai += curr.nilai;
      acc.tertinggi = Math.max(acc.tertinggi, curr.nilai);
      acc.terendah = Math.min(acc.terendah, curr.nilai);
      return acc;
    },
    {
      total: 0,
      totalNilai: 0,
      tertinggi: -Infinity,
      terendah: Infinity,
    },
  );

  return {
    total: hasil.total,
    rataRata: (hasil.totalNilai / hasil.total).toFixed(2),
    tertinggi: hasil.tertinggi,
    terendah: hasil.terendah,
  };
}

// 4. Function filter lulus
function filterLulus(arrMahasiswa, batasLulus) {
  return arrMahasiswa.filter((mhs) => mhs.nilai >= batasLulus);
}

// 5. Function tambah grade
function tambahGrade(arrMahasiswa) {
  return arrMahasiswa.map((mhs) => {
    let grade;

    if (mhs.nilai >= 85) grade = "A";
    else if (mhs.nilai >= 75) grade = "B";
    else if (mhs.nilai >= 65) grade = "C";
    else if (mhs.nilai >= 50) grade = "D";
    else grade = "E";

    return { ...mhs, grade };
  });
}

// 6. Panggil semua function
const statistik = hitungStatistik(dataMahasiswa);
const mahasiswaLulus = filterLulus(dataMahasiswa, 70);
const mahasiswaDenganGrade = tambahGrade(dataMahasiswa);

// Tampilkan statistik
console.log("=== Statistik Nilai ===");
console.log(`Total Mahasiswa : ${statistik.total}`);
console.log(`Rata-rata Nilai : ${statistik.rataRata}`);
console.log(`Nilai Tertinggi : ${statistik.tertinggi}`);
console.log(`Nilai Terendah  : ${statistik.terendah}`);

// Tampilkan mahasiswa lulus
console.log("\n=== Mahasiswa Lulus ===");
mahasiswaLulus.forEach((mhs) => {
  console.log(`${mhs.nama} - ${mhs.nilai}`);
});

// Tampilkan mahasiswa + grade
console.log("\n=== Data Mahasiswa + Grade ===");
mahasiswaDenganGrade.forEach((mhs) => {
  console.log(`${mhs.nama} - ${mhs.nilai} - Grade ${mhs.grade}`);
});

// 03-class-dasar.js
// ================================================
// CLASS: CONSTRUCTOR, PROPERTY, METHOD
// ================================================

// --- 1. Mendefinisikan class ---
class Mahasiswa {
  // Constructor: dipanggil saat 'new Mahasiswa(...)' dieksekusi
  constructor(nama, nim, jurusan) {
    this.nama = nama; // property instance
    this.nim = nim;
    this.jurusan = jurusan;
    this.nilai = []; // array kosong saat dibuat
  }

  // Method: function milik setiap instance
  tambahNilai(nilai) {
    this.nilai.push(nilai);
  }
  hitungRataRata() {
    if (this.nilai.length === 0) return 0;
    const total = this.nilai.reduce((sum, n) => sum + n, 0);
    return (total / this.nilai.length).toFixed(2);
  }
  getInfo() {
    return `[${this.nim}] ${this.nama} - ${this.jurusan} | IPK: ${this.hitungRataRata()}`;
  }
}

// --- 2. Membuat instance dari class ---
const mhs1 = new Mahasiswa("Budi Santoso", "2021001", "Informatika");
const mhs2 = new Mahasiswa("Siti Rahayu", "2021002", "Sistem Informasi");
const mhs3 = new Mahasiswa("Ahmad Fauzi", "2021003", "Informatika");

// Tambahkan nilai ke setiap mahasiswa
mhs1.tambahNilai(85);
mhs1.tambahNilai(90);
mhs1.tambahNilai(78);
mhs2.tambahNilai(92);
mhs2.tambahNilai(88);
mhs2.tambahNilai(95);
mhs3.tambahNilai(70);
mhs3.tambahNilai(75);

console.log("=== Data Mahasiswa ===");
console.log(mhs1.getInfo());
console.log(mhs2.getInfo());
console.log(mhs3.getInfo());

// --- 3. Static method ---
// Static method dimiliki CLASS, bukan instance
class Kalkulator {
  static tambah(a, b) {
    return a + b;
  }
  static kurang(a, b) {
    return a - b;
  }
  static kali(a, b) {
    return a * b;
  }
  static bagi(a, b) {
    if (b === 0) return "Error: bagi nol";
    return a / b;
  }
}

// Static method dipanggil lewat nama class, BUKAN instance
console.log("\n=== Static Method ===");
console.log("10 + 5 =", Kalkulator.tambah(10, 5));
console.log("10 * 5 =", Kalkulator.kali(10, 5));
console.log("10 / 0 =", Kalkulator.bagi(10, 0));

// --- 4. Getter dan Setter ---
class Lingkaran {
  constructor(jariJari) {
    this._jariJari = jariJari; // konvensi _ = private
  }

  // Getter: diakses seperti property, bukan method
  get jariJari() {
    return this._jariJari;
  }
  get luas() {
    return (Math.PI * this._jariJari ** 2).toFixed(2);
  }
  get keliling() {
    return (2 * Math.PI * this._jariJari).toFixed(2);
  }

  // Setter: dipanggil saat assign nilai
  set jariJari(nilai) {
    if (nilai <= 0) throw new Error("Jari-jari harus positif!");
    this._jariJari = nilai;
  }
}

console.log("\n=== Getter & Setter ===");
const l = new Lingkaran(7);
console.log("Jari-jari:", l.jariJari); // getter
console.log("Luas :", l.luas); // getter
console.log("Keliling :", l.keliling); // getter
l.jariJari = 10; // setter
console.log("Setelah diubah - Luas:", l.luas);

// 2. Class BankAccount
class BankAccount {
  constructor(namaPemilik, saldoAwal = 0) {
    this.namaPemilik = namaPemilik;
    this.saldo = saldoAwal;
  }

  // 3. Method setor
  setor(jumlah) {
    if (jumlah <= 0) {
      console.log("Jumlah setor harus lebih dari 0");
      return;
    }
    this.saldo += jumlah;
    console.log(`Setor berhasil: Rp${jumlah}`);
  }

  // 4. Method tarik
  tarik(jumlah) {
    if (jumlah <= 0) {
      console.log("Jumlah tarik harus lebih dari 0");
      return;
    }
    if (jumlah > this.saldo) {
      console.log("Saldo tidak mencukupi");
      return;
    }
    this.saldo -= jumlah;
    console.log(`Tarik berhasil: Rp${jumlah}`);
  }

  // 5. Method cekSaldo
  cekSaldo() {
    console.log(`Pemilik: ${this.namaPemilik} | Saldo: Rp${this.saldo}`);
  }

  // 6. Static method transfer
  static transfer(akun1, akun2, jumlah) {
    if (jumlah <= 0) {
      console.log("Jumlah transfer harus lebih dari 0");
      return;
    }
    if (jumlah > akun1.saldo) {
      console.log("Transfer gagal: saldo tidak mencukupi");
      return;
    }

    akun1.tarik(jumlah);
    akun2.setor(jumlah);
    console.log(
      `Transfer Rp${jumlah} dari ${akun1.namaPemilik} ke ${akun2.namaPemilik} berhasil`,
    );
  }
}

// 7. Uji coba
const akunA = new BankAccount("Aldo", 100000);
const akunB = new BankAccount("Uun", 50000);

// Cek saldo awal
akunA.cekSaldo();
akunB.cekSaldo();

// Setor
akunA.setor(50000);
akunA.cekSaldo();

// Tarik (berhasil)
akunA.tarik(30000);
akunA.cekSaldo();

// Tarik (gagal - saldo tidak cukup)
akunA.tarik(200000);

// Setor (error)
akunB.setor(0);

// Transfer (berhasil)
BankAccount.transfer(akunA, akunB, 20000);
akunA.cekSaldo();
akunB.cekSaldo();

// Transfer (gagal)
BankAccount.transfer(akunA, akunB, 500000);

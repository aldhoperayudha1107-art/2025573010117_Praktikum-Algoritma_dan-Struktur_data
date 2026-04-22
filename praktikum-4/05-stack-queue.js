// 05-stack-queue.js
// ================================================
// IMPLEMENTASI STACK DAN QUEUE MENGGUNAKAN CLASS
// ================================================

// CLASS STACK — prinsip LIFO
class Stack {
  constructor() {
    this.data = []; // array internal untuk menyimpan elemen
    this.ukuran = 0;
  }

  // Masukkan elemen ke puncak stack
  push(elemen) {
    this.data.push(elemen);
    this.ukuran++;
    console.log(` Push '${elemen}' → Stack: [${this.data}]`);
  }

  // Keluarkan dan kembalikan elemen paling atas
  pop() {
    if (this.isEmpty()) {
      console.log(" Stack kosong! Tidak bisa pop.");
      return null;
    }
    const dikeluarkan = this.data.pop();
    this.ukuran--;
    console.log(` Pop '${dikeluarkan}' → Stack: [${this.data}]`);
    return dikeluarkan;
  }

  // Lihat elemen paling atas tanpa mengeluarkan
  peek() {
    if (this.isEmpty()) return null;
    return this.data[this.data.length - 1];
  }
  isEmpty() {
    return this.ukuran === 0;
  }
  size() {
    return this.ukuran;
  }
  tampilkan() {
    console.log(` Stack (atas→bawah): [${[...this.data].reverse()}]`);
  }
}

// -----------------------------------------
// CLASS QUEUE — prinsip FIFO
// -----------------------------------------
class Queue {
  constructor() {
    this.data = [];
    this.ukuran = 0;
  }

  // Tambahkan elemen ke belakang antrian
  enqueue(elemen) {
    this.data.push(elemen);
    this.ukuran++;
    console.log(` Enqueue '${elemen}' → Queue: [${this.data}]`);
  }

  // Keluarkan dan kembalikan elemen paling depan
  dequeue() {
    if (this.isEmpty()) {
      console.log(" Queue kosong! Tidak bisa dequeue.");
      return null;
    }
    const dikeluarkan = this.data.shift();
    this.ukuran--;
    console.log(` Dequeue '${dikeluarkan}' → Queue: [${this.data}]`);
    return dikeluarkan;
  }

  // Lihat elemen paling depan tanpa mengeluarkan
  front() {
    if (this.isEmpty()) return null;
    return this.data[0];
  }
  isEmpty() {
    return this.ukuran === 0;
  }
  size() {
    return this.ukuran;
  }
  tampilkan() {
    console.log(` Queue (depan→belakang): [${this.data}]`);
  }
}

// -----------------------------------------
// DEMONSTRASI STACK
// -----------------------------------------
console.log("==============================");
console.log("DEMONSTRASI STACK (LIFO)");
console.log("==============================");

const stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
console.log(" Peek (puncak):", stack.peek());
stack.pop();
stack.pop();
stack.pop();
stack.pop(); // coba pop saat kosong

// Contoh nyata: Undo/Redo sederhana
console.log("\n--- Simulasi Undo ---");
const riwayatAksi = new Stack();
riwayatAksi.push("Ketik: Halo");
riwayatAksi.push("Ketik: Dunia");
riwayatAksi.push("Bold teks");
riwayatAksi.push("Ubah warna");
console.log(" Undo:", riwayatAksi.pop());
console.log(" Undo:", riwayatAksi.pop());
riwayatAksi.tampilkan();

// ----------------------------------------
// DEMONSTRASI QUEUE
// ----------------------------------------
console.log("\n==============================");
console.log("DEMONSTRASI QUEUE (FIFO)");
console.log("==============================");

const queue = new Queue();
queue.enqueue("X");
queue.enqueue("Y");
queue.enqueue("Z");
console.log(" Front (depan):", queue.front());
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue(); // coba dequeue saat kosong

// Contoh nyata: Antrian Printer
console.log("\n--- Simulasi Antrian Printer ---");
const antrianPrinter = new Queue();
antrianPrinter.enqueue("Dokumen-Laporan.pdf");
antrianPrinter.enqueue("Foto-Wisuda.jpg");
antrianPrinter.enqueue("Tugas-Akhir.docx");

console.log(" Mencetak...");
while (!antrianPrinter.isEmpty()) {
  const dokumen = antrianPrinter.dequeue();
  console.log(` Selesai mencetak: ${dokumen}`);
}
console.log(" Semua dokumen selesai dicetak.");

// 2. Object buku
const buku = {
  judul: "Belajar JavaScript",
  pengarang: "Andi",
  tahunTerbit: 2022,
  harga: 100000,
  tersedia: true,

  // 3. Method info()
  info: function () {
    return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
  },

  // 4. Method diskon()
  diskon: function (persen) {
    return this.harga * (1 - persen / 100);
  },
};

// Contoh penggunaan
console.log(buku.info());
console.log("Harga setelah diskon 10%:", buku.diskon(10));

// 5. Array koleksiBuku
const koleksiBuku = [
  {
    judul: "HTML Dasar",
    pengarang: "Budi",
    tahunTerbit: 2020,
    harga: 80000,
    tersedia: true,
    info: function () {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
    },
  },
  {
    judul: "CSS Lanjutan",
    pengarang: "Siti",
    tahunTerbit: 2021,
    harga: 90000,
    tersedia: false,
    info: function () {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
    },
  },
  {
    judul: "JavaScript Pro",
    pengarang: "Rudi",
    tahunTerbit: 2023,
    harga: 120000,
    tersedia: true,
    info: function () {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
    },
  },
];

// 6. Tampilkan semua buku
console.log("=== Semua Buku ===");
koleksiBuku.forEach((b) => {
  console.log(b.info());
});

// 7. Filter buku yang tersedia
const bukuTersedia = koleksiBuku.filter((b) => b.tersedia === true);

console.log("=== Buku Tersedia ===");
bukuTersedia.forEach((b) => {
  console.log(b.info());
});

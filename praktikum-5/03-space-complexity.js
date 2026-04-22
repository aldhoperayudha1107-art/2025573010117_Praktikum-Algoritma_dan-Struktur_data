// 03-space-complexity.js

// --- O(1) Space: hanya pakai variabel tambahan konstan ---
function jumlahArray(arr) {
  let total = 0; // hanya 1 variabel tambahan
  for (const x of arr) total += x;
  return total;
}

// --- O(n) Space: membuat struktur baru sebesar input ---
function duplikasiArray(arr) {
  const baru = []; // array baru tumbuh seiring arr
  for (const x of arr) baru.push(x * 2);
  return baru;
}

// --- O(n) Space: rekursi (call stack) ---
function faktorialRekursif(n) {
  if (n <= 1) return 1;
  return n * faktorialRekursif(n - 1); // n frame di call stack
}

// --- O(1) Space: faktorial iteratif ---
function faktorialIteratif(n) {
  let hasil = 1;
  for (let i = 2; i <= n; i++) hasil *= i; // hanya 2 variabel
  return hasil;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Jumlah array :", jumlahArray(arr)); // O(1) space
console.log("Duplikasi array:", duplikasiArray(arr)); // O(n) space
console.log("Faktorial 10 rekursif :", faktorialRekursif(10));
console.log("Faktorial 10 iteratif :", faktorialIteratif(10));

// Visualisasi: hitung elemen unik (O(n) space)
function hitungUnik(arr) {
  const seen = new Set(); // Set tumbuh hingga n elemen
  for (const x of arr) seen.add(x);
  return seen.size;
}

const dataAcak = [1, 2, 3, 2, 1, 4, 5, 3, 6, 4, 7];
console.log("Elemen unik:", hitungUnik(dataAcak)); // 7

// ==========================
// LATIHAN 3 - PAIR SUM
// ==========================

// Fungsi Lambat (Brute Force)
function cariPasanganLambat(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return null;
}
// Big O Time: O(n^2)
// Alasan: nested loop (dua perulangan)
// Big O Space: O(1)
// Alasan: tidak menggunakan struktur data tambahan

// Fungsi Cepat (Menggunakan Set)
function cariPasanganCepat(arr, target) {
  const seen = new Set();

  for (let num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      return [complement, num];
    }
    seen.add(num);
  }

  return null;
}
// Big O Time: O(n)
// Alasan: hanya satu loop
// Big O Space: O(n)
// Alasan: menggunakan Set untuk menyimpan data

// ==========================
// UJI COBA SEDERHANA
// ==========================
const arrTest = [2, 7, 11, 15];
const targetTest = 9;

console.log("Lambat:", cariPasanganLambat(arrTest, targetTest)); // [2,7]
console.log("Cepat:", cariPasanganCepat(arrTest, targetTest)); // [2,7]

// ==========================
// TEST PERFORMA (50.000 DATA)
// ==========================

// buat array random
function generateArray(n) {
  return Array.from({ length: n }, () => Math.floor(Math.random() * 100000));
}

const bigArray = generateArray(50000);
const target = -1; // sengaja tidak ada

console.log("\n=== TEST PERFORMA ===");

// Lambat
let start = Date.now();
cariPasanganLambat(bigArray, target);
let end = Date.now();
console.log("Lambat:", end - start, "ms");

// Cepat
start = Date.now();
cariPasanganCepat(bigArray, target);
end = Date.now();
console.log("Cepat:", end - start, "ms");

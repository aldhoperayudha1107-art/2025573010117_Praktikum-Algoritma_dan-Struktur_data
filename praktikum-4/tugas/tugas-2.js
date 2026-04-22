// 2. Class Stack
class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// 3. Function cekKurungSeimbang
function cekKurungSeimbang(ekspresi) {
  const stack = new Stack();

  for (let char of ekspresi) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.isEmpty()) {
        return false; // tidak ada pasangan
      }
      stack.pop();
    }
  }

  return stack.isEmpty(); // harus kosong agar seimbang
}

// 4–8. Pengujian
const testCases = ["(2 + 3) * (4 - 1)", "((a + b)", ")(", "((()))", "(a + b))"];

// 9. Tampilkan hasil
testCases.forEach((exp) => {
  const hasil = cekKurungSeimbang(exp);
  console.log(`'${exp}' → Seimbang: ${hasil}`);
});

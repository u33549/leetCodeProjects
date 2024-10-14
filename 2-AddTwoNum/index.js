class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function toLinkedList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let value of arr) {
    current.next = new ListNode(value);
    current = current.next;
  }
  return dummy.next; // İlk gerçek düğümü döndür
}

function linkedListToArray(head) {
  const result = [];
  let current = head;

  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

function listToNumber(l) {
  l = linkedListToArray(l);
  let length = l.length;
  let num = 0;
  for (let i = length - 1; i >= 0; i--) {
    num += l[i] * 10 ** i;
  }
  return num;
}

var addTwoNumbers = function (l1, l2) {
  let num1 = listToNumber(l1);
  let num2 = listToNumber(l2);
  let sum = num1 + num2;

  // Diziye dönüştür ve ters çevir
  return toLinkedList(Array.from(String(sum), Number).reverse());
};

// Test verileri
const l1 = toLinkedList([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
const l2 = toLinkedList([5, 6, 4]);

// Sonuçları kontrol et
console.log(linkedListToArray(l1)); // l1'in dizisi
console.log(linkedListToArray(l2)); // l2'nin dizisi
console.log(linkedListToArray(addTwoNumbers(l1, l2))); // Toplamın dizisi

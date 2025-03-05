class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// uses less memmory

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let dummy = new ListNode(0);
  let temp = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    carry = Math.floor(sum / 10);
    temp.next = new ListNode(sum % 10);
    temp = temp.next;

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }
  return dummy.next;
}

const result = addTwoNumbers(
  {
    val: 2,
    next: {
      val: 4,
      next: {
        val: 3,
        next: null,
      },
    },
  },
  {
    val: 5,
    next: {
      val: 6,
      next: {
        val: 4,
        next: null,
      },
    },
  }
);
console.log(JSON.stringify(result, null, 2));

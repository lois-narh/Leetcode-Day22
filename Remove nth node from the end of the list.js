/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // Create dummy node to handle edge cases
    let dummy = new ListNode(0, head);
    let fast = dummy;
    let slow = dummy;
    
    // Move fast pointer n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }
    
    // Move both pointers until fast reaches end
    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }
    
    // Remove nth node from end
    slow.next = slow.next.next;
    
    return dummy.next;
};
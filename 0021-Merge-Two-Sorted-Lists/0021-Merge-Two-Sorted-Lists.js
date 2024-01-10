/**
 * @param {ListNode} list1 - Голова первого списка.
 * @param {ListNode} list2 - Голова второго списка.
 * @return {ListNode} - Голова объединенного списка.
 */
var mergeTwoLists = function(list1, list2) {
    // Используем "sentinel" узел, чтобы упростить код и избежать специальных случаев.
    let sentinel = tail = new ListNode();

    // Пока есть узлы в обоих списках.
    while (list1 && list2) {
        // Проверяем, значение узла в первом списке меньше или равно значению второго списка.
        if (list1.val <= list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            // Значение второго списка меньше, чем значение первого.
            tail.next = list2;
            list2 = list2.next;
        }

        // Переходим к следующему узлу в объединенном списке.
        tail = tail.next;
    }

    // Остаток списка, если один из списков закончился.
    tail.next = list1 || list2;

    // Возвращаем голову объединенного списка (первый узел после sentinel).
    return sentinel.next;
};
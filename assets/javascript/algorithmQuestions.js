let algorithmQuestions = [];

//Create your Question Prototype aka Class
function Question(question, answer0, answer1, answer2, answer3, correctAnswer){
    this.question = question;
    this.answer0 = answer0;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.correctAnswer = correctAnswer;
}

let question0algorithm = new Question(
    "What is the time complexity of a binary sorting algorithm?",
    "O(0.5)",
    "O(n)",
    "O(logn)",
    "O(n^2)"
);

let question1algorithm = new Question(
    "Which of these statements is NOT true about selection sort.",
    "The worst case sorting time complexity is n^2.",
    "The best case sorting time complexity is n^2.",
    "One possible implementation is to find the smallest element in the array and place it in the first position. Repeating this process, while increasing the position, with the rest of until your list is sorted.",
    "Selection sort involves breaking the array into smaller arrays."
);

let question2algorithm = new Question(
    "Which of these statements is true about merge sort?",
    "The worst case sorting time complexity is n^2.",
    "The best case sorting time complexity is n^2.",
    "Merge sort involves breaking the array into smaller arrays.",
    "Merge sort cannot be used to sort a single array."
);

let question3algorithm = new Question(
    "Which of these has the worst sorting time complexity.",
    "Mergesort",
    "Timesort",
    "Heapsort",
    "Bubblesort"
);

let question4algorithm = new Question(
    "Which of these statements is NOT true about quick sort.",
    "Quicksort involves using a pivot element.",
    "Quicksort is a recursive solution.",
    "Quicksort has a worst case sorting time complexity of nlog(n).",
    "Quicksort has a best case sorting time complexity of nlog(n)."
);

algorithmQuestions.push(question0algorithm, question1algorithm, question2algorithm, question3algorithm, question4algorithm);


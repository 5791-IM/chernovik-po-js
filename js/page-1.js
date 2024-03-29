// Простая задача:

//  Напишите код, который проверяет, является ли число четным,
// и выводит в консоль сообщение "Четное", если это так,
//     и "Нечетное" в противном случае.

// const number = Math.random();

// if (number % 2 === 0) {
//   console.log("Число четное.");
// } else {
//   console.log("Число нечетное.");
// }
// ==========================================================

// Сложнее:

// Напишите функцию,
//     которая принимает на вход массив чисел и возвращает новый массив,
//         содержащий только уникальные значения из исходного массива.

// Эта функция создает новый массив,
//     содержащий только уникальные значения из исходного массива.
//     Она использует Set,
//     который автоматически удаляет дубликаты,
//         и затем преобразует его обратно в массив.
// функция, которая принимает массив чисел и возвращает новый массив,
//     содержащий только уникальные значения:

// function getUniqueValues(inputArray) {
//     // Используем Set для хранения уникальных значений
//     const uniqueSet = new Set(inputArray);

//     // Преобразуем Set обратно в массив
//     const uniqueArray = Array.from(uniqueSet);

//     return uniqueArray;
// }

// // Пример использования:
// const inputNumbers = [1, 2, 3, 2, 4, 5, 1, 6];
// const uniqueNumbers = getUniqueValues(inputNumbers);
// console.log(uniqueNumbers); // [1, 2, 3, 4, 5, 6]

// ================================================================
// Вот пример функции, которая принимает на вход массив чисел
// и возвращает новый массив, содержащий только
//  уникальные значения из исходного массива:

// javascript

// function getUniqueValues(arr) {
//   // Создаем новый массив для хранения уникальных значений
//   const uniqueValues = [];

//   // Проходим по каждому элементу исходного массива
//   arr.forEach(element => {
//     // Проверяем, есть ли текущее значение в массиве уникальных значений
//     if (!uniqueValues.includes(element)) {
//       // Если текущее значение еще не встречалось, добавляем его в массив уникальных значений
//       uniqueValues.push(element);
//     }
//   });

//   // Возвращаем массив уникальных значений
//   return uniqueValues;
// }

// // Пример использования функции
// const inputArray = [1, 2, 3, 4, 5, 1, 2, 3];
// const uniqueValuesArray = getUniqueValues(inputArray);
// console.log(uniqueValuesArray); // Ожидаемый результат: [1, 2, 3, 4, 5]

// Эта функция использует метод includes() для проверки
//  наличия элемента в массиве уникальных значений.
//  Если элемент уже присутствует в массиве
//  уникальных значений, он не добавляется повторно.
//  В результате возвращается массив,
//     содержащий только уникальные значения из исходного массива.

//      Обе функции выполняют одну и ту же задачу -
//     получение уникальных значений из массива,
//         но используют разные подходы для этого.

// Первая функция, которую вы предоставили,
//     использует Set, чтобы автоматически удалить дубликаты,
//         а затем преобразует Set обратно в массив.

// Вторая функция, которую я предложил в моем ответе,
//     использует итерацию по исходному массиву и добавление
//      каждого элемента в новый массив только в том случае,
//     если его еще нет в этом массиве.

// Обе функции работают правильно и могут быть использованы в вашем коде.
//  Вы можете выбрать ту, которая больше подходит вашему
//   стилю программирования или более понятна для вас.

//   Ваша функция getUniqueValues выглядит хорошо и коротко! Она использует структуру данных Set, которая автоматически удаляет дубликаты из массива, и затем преобразует этот Set обратно в массив с помощью Array.from().

// Вот как можно использовать вашу функцию:

// javascript

// const inputArray = [1, 2, 3, 4, 5, 1, 2, 3];
// const uniqueValuesArray = getUniqueValues(inputArray);
// console.log(uniqueValuesArray); // Ожидаемый результат: [1, 2, 3, 4, 5]

// Это простой и эффективный способ получить массив
//  уникальных значений из исходного массива.

// ===============================================================================

//     Простая задача:

//     Напишите код,
//     который проверяет, является ли строка
// палиндромом(читается одинаково с начала и с конца)
// и выводит в консоль сообщение "Палиндром",
//     если это так, и "Не палиндром" в противном случае.

// // Проверка, является ли строка палиндромом
// function isPalindrome(str) {
//     // Удаляем пробелы и приводим к нижнему регистру
//     const cleanedStr = str.replace(/\s/g, '').toLowerCase();

//     // Сравниваем строку с её перевёрнутой версией
//     if (cleanedStr === cleanedStr.split('').reverse().join('')) {
//         console.log("Палиндром");
//     } else {
//         console.log("Не палиндром");
//     }
// }

// // Пример использования
// const inputString = "А роза упала на лапу Азора";
// isPalindrome(inputString); // Выведет "Палиндром"

// ===================================================================

//  есть несколько способов проверить,
//     является ли строка палиндромом.
//     Вот еще несколько методов:

//     Сравнение символов:
//      Вы можете сравнить первый символ строки с последним,
//     второй с предпоследним и так далее,
//     двигаясь к центру строки.Если все символы совпадают,
//     то строка является палиндромом.
//         Этот метод требует меньше памяти,
//     чем создание перевернутой копии строки.

//     Использование цикла:
//      Можно использовать цикл для итерации по половине строки,
//     сравнивая символы с соответствующими символами в другой половине строки.

//     Рекурсия:
//     Можно использовать рекурсивную функцию
//      для проверки символов с обоих концов строки.

// Вот пример реализации первых двух методов:

// javascript

// function isPalindrome(str) {
//     const cleanedStr = str.replace(/\s/g, '').toLowerCase();
//     const len = cleanedStr.length;
//     for (let i = 0; i < Math.floor(len / 2); i++) {
//         if (cleanedStr[i] !== cleanedStr[len - 1 - i]) {
//             console.log("Не палиндром");
//             return;
//         }
//     }
//     console.log("Палиндром");
// }

// function isPalindromeUsingLoop(str) {
//     const cleanedStr = str.replace(/\s/g, '').toLowerCase();
//     const reversedStr = cleanedStr.split('').reverse().join('');
//     if (cleanedStr === reversedStr) {
//         console.log("Палиндром");
//     } else {
//         console.log("Не палиндром");
//     }
// }

// // Пример использования
// const inputString = "А роза упала на лапу Азора";
// isPalindrome(inputString); // Выведет "Палиндром"
// isPalindromeUsingLoop(inputString); // Выведет "Палиндром"

// Оба эти метода проверки достаточно эффективны
//  и могут использоваться для определения палиндромов в строках

// ===================================================================

// Проверка, является ли строка палиндромом
// function isPalindrome(str) {
//     // Удаляем пробелы и приводим к нижнему регистру
//     const cleanedStr = str.replace(/\s/g, '').toLowerCase();

//     // Сравниваем строку с её перевёрнутой версией
//     if (cleanedStr === cleanedStr.split('').reverse().join('')) {
//         console.log("Палиндром");
//     } else {
//         console.log("Не палиндром");
//     }
// }

// Пример использования
// const inputString = "А роза упала на лапу Азора";
// isPalindrome(inputString); // Выведет "Палиндром"
// Код, созданный ИИ.Внимательно просмотрите и используйте.
//  Дополнительные сведения о часто задаваемых вопросах.
// Этот код проверяет, является ли введенная строка палиндромом.
//  Если строка читается одинаково с начала и с конца
//     (игнорируя пробелы и регистр), то выводится сообщение “Палиндром”,
// иначе - “Не палиндром”.Например, строка “А роза упала на лапу Азора”
//  будет считаться палиндромом.

// Можно ли использовать этот код для проверки чисел на палиндромность?
// Copilot
// Данный код предназначен для проверки строк на палиндромность, а не чисел.
//  Он удаляет пробелы и приводит строку к нижнему регистру,
//     а затем сравнивает её с перевёрнутой версией.
//     Для проверки чисел на палиндромность можно использовать другой подход.

// Вот пример функции на JavaScript, которая проверяет,
//     является ли число палиндромом:

// JavaScript

// function isNumberPalindrome(num) {
//     const numStr = num.toString(); // Преобразуем число в строку
//     const reversedStr = numStr.split('').reverse().join(''); // Переворачиваем строку

//     if (numStr === reversedStr) {
//         console.log("Число является палиндромом");
//     } else {
//         console.log("Число не является палиндромом");
//     }
// }

// // Пример использования
// const number = 12321;
// isNumberPalindrome(number); // Выведет "Число является палиндромом"
// Код, созданный ИИ.Внимательно просмотрите и используйте.
//  Дополнительные сведения о часто задаваемых вопросах.
// Эта функция преобразует число в строку,
//     переворачивает её и сравнивает с исходной строкой.
//     Если они совпадают, то число считается палиндромом.
//     Например, число 12321 будет считаться палиндромом.

// ================================================================

// Сложнее:

// Напишите функцию,
//     которая принимает на вход массив строк и возвращает новый массив,
//         содержащий только те строки, которые начинаются с определенной буквы.

// ======================================================================

// Конечно!
//  Вот пример функции на JavaScript,
//     которая принимает массив строк и возвращает новый массив,
//         содержащий только те строки, которые начинаются с определенной буквы:

// function filterStringsByFirstLetter(arr, targetLetter) {
//     // Используем метод filter для отбора строк, начинающихся с заданной буквы
//     const filteredArray = arr.filter((str) =>
//         str.charAt(0).toLowerCase() === targetLetter.toLowerCase());
//     return filteredArray;
// }

// // Пример использования:
// const inputArray = ['sun', 'underground', 'place', 'apple', 'banana'];
// const targetLetter = 'u';
// const resultArray = filterStringsByFirstLetter(inputArray, targetLetter);

// console.log(resultArray); // Выведет: ['underground']
//  Внимательно просмотрите и используйте.
//   Дополнительные сведения о часто задаваемых вопросах.
// В данном примере функция filterStringsByFirstLetter
//  принимает массив строк arr и букву targetLetter.
//  Она фильтрует строки, чтобы оставить только те,
//     которые начинаются с заданной буквы(регистр не учитывается).
//     В результате получается новый массив, содержащий отфильтрованные строки.

//     Пожалуйста, адаптируйте этот код под свои нужды,
//         заменив inputArray и targetLetter на свои значения.

// ======================================================================

//     Простая задача:

// Напишите код,
//  который преобразует строку в обратном порядке.

// ===============================================================

// Сложнее:

//      Напишите функцию,
//     которая принимает на вход число
//      и возвращает строку с его римским представлением.

// =========================================================

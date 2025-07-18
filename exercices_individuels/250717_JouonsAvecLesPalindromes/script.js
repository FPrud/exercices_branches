// ____________________Étape 1____________________

function maxDaysInMonth(month, year) {
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        return 31;
    }
    if (month === 4 || month === 6 || month === 9 || month === 11) {
        return 30;
    }
    if (month === 2) {
        // Une année est bissextile si elle est divisible par 4, SAUF si elle est divisible par 100 mais PAS par 400. (merci Gemini)
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            return 29;
        }
        return 28;
    }
    return 0;
}

function isValidDate(dateString) {
    if (dateString.length !== 10) {
        return false;
    }
    if (dateString[2] !== '/' || dateString[5] !== '/') {
        return false;
    }
    const dayString = dateString.substring(0, 2);
    const monthString = dateString.substring(3, 5);
    const yearString = dateString.substring(6, 10);

    const day = parseInt(dayString, 10);
    const month = parseInt(monthString, 10);
    const year = parseInt(yearString, 10);

    if (year < 1000 || year > 9999) {
        return false;
    }

    if (month < 1 || month > 12) {
        return false;
    }

    const maxDays = maxDaysInMonth(month, year);

    if (day < 1 || day > maxDays) {
        return false;
    }

    return true;
}

// ____________________Étape 2____________________

function isPalindrome(dateString) {
  if (!isValidDate(dateString)) {
    return false;
  }
  const cleanedDate = dateString.replace(/\//g, "");

  const reversedCleanedDate = cleanedDate.split('').reverse().join('');

  return cleanedDate === reversedCleanedDate;
}

// ____________________Étape 3____________________

function getNextPalindromes(x) {
  const palindromesFound = [];
  let currentDate = new Date();

  while (palindromesFound.length < x) {

    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = String(currentDate.getFullYear());

    const dateString = `${day}/${month}/${year}`;

    if (isPalindrome(dateString)) {
      palindromesFound.push(dateString);
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return palindromesFound;
}

console.log(getNextPalindromes(8));

// ____________________Étape 4____________________

// Étape 4
// Refactorer la fonction isPalindrome pour faire en sorte qu’elle renvoie si, ou non, une chaine de caractère est un palindrome. Créer ensuite une nouvelle fonction isDatePalindrome qui reprendra les spécificités du palindrome au format date (comme s’assurer que la date est valide) et qui appellera isPalindrome.
let phrases = [
    'отправить другу смешную гифку*',
    'почитать новости',
    'поспать',
    'посмотреть Ютуб',
    'поиграть в баскет',
    'читать про зарплаты в Сан-Франциско'
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
  button.addEventListener('click', function () {
   phrase.textContent = getRandomElement(phrases);
  }); 
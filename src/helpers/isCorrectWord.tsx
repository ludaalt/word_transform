const isCorrectWord = (string: string): boolean => {
    fetch(`https://speller.yandex.net/services/spellservice.json/checkText?text=${string}&lang=ru`)
      .then((response) => response.json())
      .then((json) => {
        if(json.length !== 0) {
          throw Error(`Возможно, вы имели ввиду ${json[0]['s']}`);
        }
      })
      .catch((error) => alert(error));  
      
  return true;
}

export default isCorrectWord;
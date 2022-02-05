const isCorrectWord = (string: string): any => {
    fetch(`https://speller.yandex.net/services/spellservice.json/checkText?text=${string}`)
      .then((response) => response.json())
      .then((json) => {
        if(json[0]['s'].length < 1) return true;
        else throw Error(`Возможно, вы имели ввиду ${json[0]['s']}`)
      })
      .catch((error) => alert(error));    
}

export default isCorrectWord;
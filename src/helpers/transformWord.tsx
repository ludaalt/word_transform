const transformWord = (string: string | '', caseName: string): any => {
    let casesNames = ['Родительный', 'Дательный', 'Винительный', 'Творительный', 'Предложный'];

    let result = '';
    let ends = []

    let lastChar = string[string.length - 1]

    switch(lastChar) {
        case 'а': 
            ends.push('ы', 'е', 'у', 'ой', 'е'); // ж.род
            break;

        case 'е': 
            ends.push('я', 'ю', 'е', 'ем', 'е');
            break;

        case 'ё': 
            ends.push('я', 'ю', 'ё', 'ём', 'е');
            break;

        case 'ж': 
            ends.push('а', 'у', 'е', 'ом', 'е');
            break;

        case 'и':
            return 'Введите русское существительное в единственном числе'

        case 'й': 
            ends.push('я', 'ю', 'я', 'ем', 'е');
            break;

        case 'о': 
            ends.push('а', 'у', 'о', 'ом', 'е');
            break;

        case 'б':
        case 'к':
        case 'м':
        case 'н':
        case 'т': 
        case 'ф': 
            ends.push('а', 'у', 'а', 'ом', 'е');
            return string + ends[casesNames.indexOf(caseName)];

        case 'ц':
        case 'ч':
            ends.push('а', 'у', '', 'ем', 'е');
            break;

        case 'в':
        case 'г':
        case 'д':
        case 'з':
        case 'л':
        case 'п':
        case 'р':
        case 'с':
        case 'х':
        case 'ш':
        case 'щ':
            ends.push('а', 'у', '', 'ом', 'е');
            result += string + ends[casesNames.indexOf(caseName)];
            return result;

        case 'ь': 
        if(string[string.length - 2] === 'р' || string[string.length - 2] === 'л') {
            ends.push('я', 'ю', 'ь', 'ем', 'е');
        } else {
            ends.push('и', 'и', 'ь', 'ью', 'и');
        }
            break;


        case 'я': 
            if(string.endsWith('ия')) {
                ends.push('и', 'и', 'ю', 'ей', 'и');
                break;
            }
            ends.push('и', 'е', 'ю', 'ей', 'е');
            break;


        default: // у
            return string;
    }


    result += string.slice(0, -1) + ends[casesNames.indexOf(caseName)];
    return result

}

export default transformWord
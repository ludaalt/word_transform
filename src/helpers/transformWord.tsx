const transformWord = (string: string | '', caseName: string): string => {
    let casesNames = ['Родительный', 'Дательный', 'Винительный', 'Творительный', 'Предложный'];
    let result = '';
    let ends = []

    let lastChar = string[string.length - 1]
    console.log(lastChar)

    switch(lastChar) {
        case 'а': 
            ends.push('ы', 'е', 'у', 'ой', 'е');
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
            ends.push('я', 'ю', 'я', 'ум', 'е');
            break;

        case 'о': 
            ends.push('а', 'у', 'а', 'у', 'у');
            break;

        case 'б':
        case 'к':
        case 'м':
        case 'н':
        case 'т': 
        case 'ф': 
            ends.push('а', 'у', 'а', 'ом', 'е');
            break;

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
            ends.push('и', 'и', 'ь', 'ью', 'и');
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
const isRussianWord = (string: string): boolean => {
    return /^[а-яё]*$/i.test(string);
}

export default isRussianWord;
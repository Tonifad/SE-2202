//TASK 1
let even_predicate = function (value)
{
    if (value === null || value === undefined)
    {
        return false;
    }

    let numberValue = Number(value);

    return Number.isFinite(numberValue) &&
           Number.isInteger(numberValue) &&
           numberValue % 2 === 0;
};

let odd_predicate = function (value)
{
    if (value === null || value === undefined)
    {
        return false;
    }

    let numberValue = Number(value);

    if (!Number.isFinite(numberValue) || !Number.isInteger(numberValue))
    {
        return false;
    }

    // Numbers must be odd, while strings must be even.
    if (typeof value === "number")
    {
        return numberValue % 2 !== 0;
    }

    return numberValue % 2 === 0;
};

let undefined_predicate = function (value)
{
    return value === undefined;
};

let null_predicate = function (value)
{
    return value === null;
};

let check = function (predicate, value)
{
    return predicate(value);
};

//TASK 2
let getDictionary = function (lang)
{
    // The input to englishDictionary will be a number.
    let englishDictionary = function (number)
    {
        switch (number)
        {
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            default:
                return "not included in dictionary";
        }
    };

    // The input to frenchDictionary will be a number.
    let frenchDictionary = function (number)
    {
        switch (number)
        {
            case 1:
                return "un";
            case 2:
                return "deux";
            case 3:
                return "trois";
            default:
                return "not included in dictionary";
        }
    };

    // Accept any capitalization of the language.
    if (lang.toLowerCase() === "e" || lang.toLowerCase() === "english")
    {
        return englishDictionary;
    }
    else
    {
        return frenchDictionary;
    }
};


// Test the English dictionary
let english = getDictionary("English");
console.log(english(1));
console.log(english(4));

// Test the French dictionary
let french = getDictionary("FRENCH");
console.log(french(2));
console.log(french(5));
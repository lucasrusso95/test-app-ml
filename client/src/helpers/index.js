import React from 'react';

export const formatMoney = (value) => {

    const comma = value.indexOf(',') !== -1;

    let valueFormatted = '';

    if(comma) {

        let valueArray = value.split(',');

        let decimals = valueArray[valueArray.length - 1];
            decimals = parseInt(decimals);
        
        if(decimals < 10) {
            decimals = (decimals * 10).toString();
        }

        valueFormatted = (
            <span itemProp="price" content={value}>
                {valueArray[0]}
                <sup>{decimals}</sup>
            </span>
        )

    } else {

        valueFormatted = (
            <span itemProp="price" content={value}>
                {value}
                <sup>00</sup>
            </span>
        )

    }

    return valueFormatted;

}

export const translateCondition = (condition, language = 'EN') => {

    const translations = {
        'ES': {
            'new': 'Nuevo',
            'not_specified': 'No especificado por el vendedor',
            'used': 'Usado'
        },
        'PT': {
            'new': 'Novo',
            'not_specified': 'Nao especificado pelo vendedor',
            'used': 'Usado'
        }
    }

    return (language !== 'EN') ? translations[language][condition] : condition;

}
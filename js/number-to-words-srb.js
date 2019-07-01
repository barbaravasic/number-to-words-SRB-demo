export const numberToWordsSRB = (numInput) => {
    const firstNineteen = ['', 'jedan', 'dva', 'tri', 'četiri', 'pet', 'šest', 'sedam', 'osam', 'devet', 'deset', 'jedanaest', 'dvanaest', 'trinaest', 'četrnaest', 'petnaest', 'šesnaest', 'sedamnaest', 'osamnaest', 'devetnaest']

    const firstNineteenMod = ['', 'jedna', 'dve', 'tri', 'četiri', 'pet', 'šest', 'sedam', 'osam', 'devet', 'deset', 'jedanaest', 'dvanaest', 'trinaest', 'četrnaest', 'petnaest', 'šesnaest', 'sedamnaest', 'osamnaest', 'devetnaest']

    const tens = ['', '', 'dvadeset', 'trideset', 'četrdeset', 'pedeset', 'šezdeset', 'sedamdeset', 'osamdeset', 'devedeset']

    const hundreds = ['', 'sto', 'dvesta', 'trista', 'četiristo', 'petsto', 'šesto', 'sedamsto', 'osamsto', 'devetsto']

    const num = parseInt(numInput)
    
    const numString = numInput.split('').join('')

    const slicedLastTwo = parseInt(numString.slice(-2))
    const slicedFourthFromBack = parseInt(numString[numString.length - 4])
    const slicedFifthFromBack = parseInt(numString[numString.length - 5])
    const slicedSixthFromBack = parseInt(numString[numString.length - 6])
    const slicedSeventhFromBack = parseInt(numString[numString.length - 7])
    const sliceMillionTens = parseInt(numString.slice(-8, -6))


    const properThousandWord = () => {

        if (slicedFifthFromBack !== 1 && slicedFourthFromBack > 1 && slicedFourthFromBack < 5) {
            return 'hiljade'
        }

        return 'hiljada'
    }

    const properNumOfThousandsWord = () => {

        const sliceStart = numString.length === 4 ? 4 : 5

        let numOfThousands = parseInt(numString.slice(-sliceStart, -3))

        if (numOfThousands < 20) {
            return firstNineteenMod[numOfThousands]
        }

        return `${tens[slicedFifthFromBack]} ${firstNineteenMod[slicedFourthFromBack]}`

    }

    const properMillionWord = () => {

        if (slicedSeventhFromBack === 1) {
            return 'milion'
        }

        return 'miliona'
    }

    const checkThousands = () => {
        if (slicedFourthFromBack === 0 && slicedFifthFromBack === 0 && slicedSixthFromBack === 0) {
            return ''
        }

        return properThousandWord()
    }

    const writeHundreds = () => {
        const stIndex = numString.length - 3
        const destIndex = numString.length - 2
        const jedIndex = numString.length - 1

        if (slicedLastTwo < 20) {
            return `${hundreds[numString[stIndex]]} ${firstNineteen[slicedLastTwo]}`
        }

        return `${hundreds[numString[stIndex]]} ${tens[numString[destIndex]]} ${firstNineteen[numString[jedIndex]]}`
    }

    const writeMilionTens = () => {
        const tensIndex = numString.length - 8
        const onesIndex = numString.length - 7

        if(sliceMillionTens < 20) {
            return `${firstNineteen[sliceMillionTens]} ${properMillionWord()} `
        }

        return `${tens[numString[tensIndex]]} ${firstNineteen[numString[onesIndex]]} ${properMillionWord()}`
    }
    
    const formatResult = (res) => {

        if(num < 0) {
            return `minus ${res.split(' ').filter(item => item !== '').join(' ')}`
        }

        return res.split(' ').filter(item => item !== '').join(' ')
    }

    if (num === 0) {
        return 'nula'
    }

    if(numString.length > 9) {
        return 'Podržani su samo brojevi koji imaju do 9 cifara'
    }

    if (parseInt(numString) < 20 ) {
        return firstNineteen[num]
    }

    if (numString.length === 2) {
        return `${tens[numString[0]]} ${firstNineteen[numString[1]]}`
    }

    if (numString.length === 3) {

        return formatResult(writeHundreds())
    }

    if (numString.length === 4) {

        const res = `${properNumOfThousandsWord()} ${properThousandWord()} ${writeHundreds()}`

        return formatResult(res)
    }

    if (numString.length === 5) {

        const res = `${properNumOfThousandsWord()} ${properThousandWord()} ${writeHundreds()}`

        return formatResult(res)
    }

    if (numString.length === 6) {

        const res = `${hundreds[numString[0]]} ${properNumOfThousandsWord()} ${properThousandWord()} ${writeHundreds()}`

        return formatResult(res)
    }

    if (numString.length === 7) {

        const res = `${firstNineteen[numString[0]]} ${properMillionWord()} ${hundreds[numString[1]]} ${properNumOfThousandsWord()} ${checkThousands()} ${writeHundreds()}`

        return formatResult(res)
    }

    if (numString.length === 8) {

        const res = `${writeMilionTens()} ${hundreds[numString[2]]} ${properNumOfThousandsWord()} ${checkThousands()} ${writeHundreds()} `

        return formatResult(res)
    }

    if (numString.length === 9) {

        const res = `${hundreds[numString[0]]} ${writeMilionTens()} ${hundreds[numString[3]]} ${properNumOfThousandsWord()} ${checkThousands()} ${writeHundreds()} `

        return formatResult(res)
    }
}
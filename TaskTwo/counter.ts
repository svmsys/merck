function countBackwards(value: number) {
    for (let currentValue = value; currentValue>0;currentValue--) {
        const toPrint = (currentValue % 5 === 0 && currentValue % 3 === 0) ? 'Testing'
        : (currentValue % 5 === 0) ? 'Agile'
        : (currentValue % 3 === 0) ? 'Software'
        : currentValue;
        console.log(toPrint);
    }
}

countBackwards(31);
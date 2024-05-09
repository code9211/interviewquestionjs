function occurrenceArray(value) {
    let final = {};

    value.forEach(element => {
        for (const key in element) {
            if (Object.hasOwnProperty.call(element, key)) {
                if (final.hasOwnProperty(key)) {
                    final[key] = ++final[key]
                }
                else {
                    final[key] = 1
                }
            }
        }
    });
    console.log(final)
}
occurrenceArray([{ a: 1, b: 3 }, { a: 3, b: 5 }])


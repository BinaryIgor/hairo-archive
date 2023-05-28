const fs = require('fs');
const inspect = require('util').inspect;

let sourceWithDestinations = [
    { source: 'i18n/pl.json', destination: 'src/app/i18n/translations-pl.ts' },
    { source: 'i18n/en.json', destination: 'src/app/i18n/translations-en.ts' },
]

for (let sourceWithDestination of sourceWithDestinations) {
    fs.readFile(sourceWithDestination.source, 'utf8', function (err, json) {
        if (err) {
            throw new Error(err);
        }
        generateCode(json, sourceWithDestination.destination);
    })
}

function generateCode(json, destination) {
    let toBeGenerated = `${translations(json)}`
    fs.writeFile(destination, toBeGenerated, function (err) {
        if (err) {
            throw new Error(err);
        }
        console.log(`Translations generated: ${destination}`)
    });
}

function translations(json) {
    let code = inspect(JSON.parse(json), false, 100);
    return `
export const translations: any = ${code};`
}


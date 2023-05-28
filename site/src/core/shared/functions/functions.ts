export function keyByValue(object: any, value: any): any {
  return Object.keys(object).find(key => object[key] === value);
}

export function replaceXAndYWith(value: string, x: string, y: string, values: { prefix: string, suffix: string }[]): string {
  let result = '';
  let regex = new RegExp(`(${x})(.*?)(${y})`, 'g');
  let regexResults = [];
  let regexResult;
  while (null !== (regexResult = regex.exec(value))) {
    regexResults.push(regexResult);
  }

  let from = 0;

  for (let i = 0; i < regexResults.length; i++) {
    result = result + value.slice(from, regexResults[i].index);
    result = result + values[i].prefix + regexResults[i][2] + values[i].suffix;
    from = regexResults[i].index + regexResults[i][0].length;
  }

  if (value.length > from) {
    result = result + value.slice(from);
  }

  return result;
}

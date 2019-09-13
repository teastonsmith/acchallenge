function ArrayMatching(strArr) {
  const str1 = strArr[0]
  const str2 = strArr[1]
  const output = []

  str1 = str1.replace(/[\[\]]/, '').split(', ').map(Number)
  console.log(str1)
  str2 = str2.replace(/[\[\]]/, '').split(', ').map(Number)

  const longArr = str1.length > str2.length ? str1 : str2
  const shortArr = str1.length <= str2.length ? str1 : str2

  for ( let i = 0; i < longArr.length; i++) {
    if (shortArr[i]) {
      let add = shortArr[i] + longArr[i]
      output.push(add)
    } else {
      output.push(longArr[i])
    }
  }
  return result.join('-')
}

const test1 = {'[5,2,3]', '[2,2,2,10,6]'}
ArrayMatching(test1)

const test2 = {'[1,2,1]', '[2,1,5,2'}
ArrayMatching(test2)

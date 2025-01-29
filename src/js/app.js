// TODO: write your code here

console.log('worked');

export default function sortCharStates (obj, reference) {
  let objToList = []

  for (const state in obj) {
    objToList.push({'key': state, 'value': obj[state]})
  }

  objToList.sort((state1, state2) => state1.key.localeCompare(state2.key));
  console.log('Отсортированный массив (по алфавиту)', objToList)

  const resultDict = {}
  
  for (const stateIndex in objToList) {
    let state = objToList[stateIndex].key
    if (reference.includes(state)) {
      let needIndex = reference.indexOf(state)
      resultDict[state] = needIndex
    } else {
      let needIndexNonSort = Number(stateIndex) + Number(reference.length)
      resultDict[state] = needIndexNonSort
    }
  }

  objToList.sort((state1, state2) => resultDict[state1.key] - resultDict[state2.key]);
  console.log('Отсортированный массив (по референсу)', objToList)

  return objToList;
}
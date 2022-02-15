export const getFullObject = clazz => {
  let array = [];
  let fullObject = {};
  let fullArray = [];
  const keys = Object.keys(clazz[0]).filter(item => item !== 'name');
  const courseObject = {...clazz[0]};
  delete courseObject.name;
  let mainObj = {
    obj: courseObject,
    arr: fullArray
  }

  // console.table(clazz[clazz.length - 1]);
  // console.log('---------------------------------------------------------------------------------------------------------------------------------------------');

  for (let i = 0; i < keys.length; i++) {
    for (let j = 1; j < clazz.length - 1; j++) {
      if(clazz[j][keys[i]] !== null) {
        array.push(clazz[j].name);
      }
    }
    fullObject = {...fullObject, [keys[i]]: array,};
    fullArray.push({[keys[i]]: array});
    array = [];
  }
  // console.log(mainObj);
  return mainObj;
}

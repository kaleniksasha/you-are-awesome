// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = propertyName => {
  return propertyName;
};

const createNotEnumerableProperty = propertyName => {
  return Symbol(propertyName);
};

const createProtoMagicObject = () => {};

const incrementor = () => {
  incrementor.count++;
  return incrementor;
};
incrementor.count = 0;
incrementor.valueOf = () => incrementor.count;

const asyncIncrementor = () => {
  return new Promise(r => r(++asyncIncrementor.count));
};
asyncIncrementor.count = 0;

const createIncrementer = function*() {
  let i = 1;
  for (;;) yield i++;
};

const returnBackInSecond = param => {
  return new Promise(r => {
    setTimeout(() => {
      r(param);
    }, 1000);
  });
};

const getDeepPropertiesCount = obj => {
  let stack = [obj];
  let count = 0;
  while (stack.length > 0) {
    count++;
    let obj = stack.pop();
    for (let propertyName in obj) {
      if (obj[propertyName] instanceof Object) {
        stack.push(obj[propertyName]);
      }
    }
  }
  return count - 1;
};

const createSerializedObject = () => {
  return null;
};

const toBuffer = () => {};

const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;

import lodash from 'lodash';

function getObjectValue<TObject extends object, TKey extends keyof TObject>(object: TObject, path: TKey | [TKey]) {
   return lodash.get(object, path);
}

export { getObjectValue };
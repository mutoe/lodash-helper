export default {

  chunk: {
    type: 'array',
    since: '3.0.0',
    source: '_.chunk(array, [size=1])',
  },

  compact: {
    type: 'array',
    since: '0.1.0',
    source: '_.compact(array)',
  },

  contact: {
    type: 'array',
    since: '4.0.0',
    source: '_.concat(array, [values])',
  },

  difference: {
    type: 'array',
    since: '0.1.0',
    source: '_.difference(array, [values])',
  },

  differenceBy: {
    type: 'array',
    since: '4.0.0',
    source: '_.differenceBy(array, [values], [iteratee=_.identity])',
  },

  differenceWith: {
    type: 'array',
    since: '4.0.0',
    source: '_.differenceWith(array, [values], [comparator])',
  },

  drop: {
    type: 'array',
    since: '0.5.0',
    source: '_.drop(array, [n=1])',
  },

  dropRight: {
    type: 'array',
    since: '3.0.0',
    source: '_.dropRight(array, [n=1])',
  },

  dropRightWhile: {
    type: 'array',
    since: '3.0.0',
    source: '_.dropRightWhile(array, [predicate=_.identity])',
  },

  dropWhile: {
    type: 'array',
    since: '3.0.0',
    source: '_.dropRightWhile(array, [predicate=_.identity])',
  },

  fill: {
    type: 'array',
    since: '3.2.0',
    source: '_.fill(array, value, [start=0], [end=array.length])',
  },

  findIndex: {
    type: 'array',
    since: '1.1.0',
    source: '_.findIndex(array, [predicate=_.identity], [fromIndex=0])',
  },

  findLastIndex: {
    type: 'array',
    since: '2.0.0',
    source: '_.findLastIndex(array, [predicate=_.identity], [fromIndex=array.length-1])',
  },

  flatten: {
    type: 'array',
    since: '0.1.0',
    source: '_.flatten(array)',
  },

  flattenDeep: {
    type: 'array',
    since: '3.0.0',
    source: '_.flattenDeep(array)',
  },

  flattenDepth: {
    type: 'array',
    since: '4.0.0',
    source: '_.flattenDepth(array, [depth=1])',
  },

  fromPairs: {
    type: 'array',
    since: '4.0.0',
    source: '_.fromPairs(pairs)',
  },

  first: {
    type: 'array',
    since: '0.1.0',
    source: '_.head(array)',
  },

  head: this.first,

  indexOf: {
    type: 'array',
    since: '0.1.0',
    source: '_.indexOf(array, value, [fromIndex=0])',
  },

  initial: {
    type: 'array',
    since: '0.1.0',
    source: '_.initial(array)',
  },

  intersection: {
    type: 'array',
    since: '0.1.0',
    source: '_.intersection([arrays])',
  },

  intersectionBy: {
    type: 'array',
    since: '4.0.0',
    source: '_.intersectionBy([arrays], [iteratee=_.identity])',
  },

  intersectionWiht: {
    type: 'array',
    since: '4.0.0',
    source: '_.intersectionWiht([arrays], [comparator])',
  },

  join: {
    type: 'array',
    since: '4.0.0',
    source: `_.join(array, [separator=','])`,
  },

  last: {
    type: 'array',
    since: '0.1.0',
    source: '_.last(array)',
  },

  lastIndexOf: {
    type: 'array',
    since: '0.1.0',
    source: '_.lastIndexOf(array, value, [fromIndex=array.length-1])',
  },

  nth: {
    type: 'array',
    since: '4.11.0',
    source: '_.nth(array, [n=0])',
  },

  pull: {
    type: 'array',
    since: '2.0.0',
    source: '_.poll(array, [values])',
  },

  pullAll: {
    type: 'array',
    since: '4.0.0',
    source: '_.pullAll(array, values)',
  },

  pullAllBy: {
    type: 'array',
    since: '4.0.0',
    source: '_.pullAllBy(array, values, [iteratee=_.identity])',
  },

  pullAllWith: {
    type: 'array',
    since: '4.6.0',
    source: '_.pullAllWith(array, values, [comparator])',
  },

  pullAt: {
    type: 'array',
    since: '3.0.0',
    source: '_.pullAt(array, [indexes])',
  },

  remove: {
    type: 'array',
    since: '2.0.0',
    source: '_.remove(array, [predicate=_.identity])',
  },

  reverse: {
    type: 'array',
    since: '4.0.0',
    source: '_.reverse(array)',
  },

  slice: {
    type: 'array',
    since: '3.0.0',
    source: '_.slice(array, [start=0], [end=array.length])',
  },

  sortedIndex: {
    type: 'array',
    since: '0.1.0',
    source: '_.sortedIndex(array, value)',
  },

  sortedIndexBy: {
    type: 'array',
    since: '4.0.0',
    source: '_.sortedIndexBy(array, value, [iteratee=_.identity])',
  },

  sortedIndexOf: {
    type: 'array',
    since: '4.0.0',
    source: '_.sortedIndexOf(array, value)',
  },

  sortedLastIndex: {
    type: 'array',
    since: '3.0.0',
    source: '_.sortedLastIndex(array, value)',
  },

  sortedLastIndexBy: {
    type: 'array',
    since: '4.0.0',
    source: '_.sortedLastIndexBy(array, value, [iteratee=_.identity])',
  },

  sortedLastIndexOf: {
    type: 'array',
    since: '4.0.0',
    source: '_.sortedLastIndexOf(array, value)',
  },

  sortedUniq: {
    type: 'array',
    since: '4.0.0',
    source: '_.sortedUniq(array)',
  },

  sotredUniqBy: {
    type: 'array',
    since: '4.0.0',
    source: '_.sotredUniqBy(array, [iteratee])',
  },

  tail: {
    type: 'array',
    since: '4.0.0',
    source: '_.tail(array)',
  },

  take: {
    type: 'array',
    since: '0.1.0',
    source: '_.take(array, [n=1])',
  },

  takeRight: {
    type: 'array',
    since: '3.0.0',
    source: '_.takeRight(array, [n=1])',
  },

  takeRightWhile: {
    type: 'array',
    since: '3.0.0',
    source: '_.takeRightWhile(array, [predicate=_.identity])',
  },

  takeWhile: {
    type: 'array',
    since: '3.0.0',
    source: '_.takeWhile(array, [predicate=_.identity])',
  },

  union: {
    type: 'array',
    since: '0.1.0',
    source: '_.union([arrays])',
  },

  unionBy: {
    type: 'array',
    since: '4.0.0',
    source: '_.unionBy([arrays], [iteratee=_.identity])',
  },

  unionWith: {
    type: 'array',
    since: '4.0.0',
    source: '_.unionWith([arrays], [comparator])',
  },

  uniq: {
    type: 'array',
    since: '0.1.0',
    source: '_.uniq(array)',
  },

  uniqBy: {
    type: 'array',
    since: '4.0.0',
    source: '_.uniqBy(array, [iteratee=_.identity])',
  },

  uniqWith: {
    type: 'array',
    since: '4.0.0',
    source: '_.uniqWith(array, [comparator])',
  },

  unzip: {
    type: 'array',
    since: '1.2.0',
    source: '_.unzip(array)',
  },

  unzipWith: {
    type: 'array',
    since: '3.8.0',
    source: '_.unzipWith(array, [iteratee=_.identity])',
  },

  without: {
    type: 'array',
    since: '0.1.0',
    source: '_.without(array, [values])',
  },

  xor: {
    type: 'array',
    since: '2.4.0',
    source: '_.xor([arrays])',
  },

  xorBy: {
    type: 'array',
    since: '4.0.0',
    source: '_.xorBy([arrays], [iteratee=_.identity])',
  },

  xorWith: {
    type: 'array',
    since: '4.0.0',
    source: '_.xorWith([arrays], [comparator])',
  },

  zip: {
    type: 'array',
    since: '0.1.0',
    source: '_.zip([arrays])',
  },

  zipObject: {
    type: 'array',
    since: '0.4.0',
    source: '_.zipObject([props=[]], [values=[]])',
  },

  zipObjectDeep: {
    type: 'array',
    since: '4.1.0',
    source: '_.zipObjectDeep([props=[]], [values=[]])',
  },

  zipWith: {
    type: 'array',
    since: '3.8.0',
    source: '_.zipWith([arrays], [iteratee=_.identity])',
  },

}

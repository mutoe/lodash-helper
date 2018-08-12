export default {

  assign: {
    type: 'object',
    since: '0.10.0',
    source: '_.assign(object, [sources])',
  },

  assignIn: {
    type: 'object',
    since: '4.0.0',
    source: '_.assignIn(object, [sources])',
  },

  assignInWith: {
    type: 'object',
    since: '4.0.0',
    source: '_.assignInWith(object, sources, [customizer])',
  },

  assignWith: {
    type: 'object',
    since: '4.0.0',
    source: '_.assignWith(object, sources, [customizer])',
  },

  at: {
    type: 'object',
    since: '1.0.0',
    source: '_.at(object, [paths])',
  },

  create: {
    type: 'object',
    since: '2.3.0',
    source: '_.create(prototype, [properties])',
  },

  defaults: {
    type: 'object',
    since: '0.1.0',
    source: '_.defaults(object, [sources])',
  },

  defaultsDeep: {
    type: 'object',
    since: '3.10.0',
    source: '_.defaultsDeep(object, [sources])',
  },

  entries: this.toPairs,

  entiresIn: this.toPairsIn,

  extend: this.assignIn,

  extendWith: this.assignInWith,

  findKey: {
    type: 'object',
    since: '1.1.0',
    source: '_.findKey(object, [predicate=_.identity])',
  },

  findLastKey: {
    type: 'object',
    since: '2.0.0',
    source: '_.findLastKey(object, [predicate=_.identity])',
  },

  forIn: {
    type: 'object',
    since: '0.3.0',
    source: '_.forIn(object, [iteratee=_.identity])',
  },

  forInRight: {
    type: 'object',
    since: '2.0.0',
    source: '_.forInRight(object, [iteratee=_.identity])',
  },

  forOwn: {
    type: 'object',
    since: '0.3.0',
    source: '_.forOwn(object, [iteratee=_.identity])',
  },

  forOwnRight: {
    type: 'object',
    since: '2.0.0',
    source: '_.forOwnRight(object, [iteratee=_.identity])',
  },

  functions: {
    type: 'object',
    since: '0.1.0',
    source: '_.functions(object)',
  },

  functionsIn: {
    type: 'object',
    since: '4.0.0',
    source: '_.functionsIn(object)',
  },

  get: {
    type: 'object',
    since: '3.7.0',
    source: '_.get(object, path, [defaultValue])',
  },

  has: {
    type: 'object',
    since: '0.1.0',
    source: '_.has(object, path)',
  },

  hasIn: {
    type: 'object',
    since: '4.0.0',
    source: '_.hasIn(object, path)',
  },

  invert: {
    type: 'object',
    since: '0.7.0',
    source: '_.invert(object)',
  },

  invertBy: {
    type: 'object',
    since: '4.1.0',
    source: '_.invertBy(object, [iteratee=_.identity])',
  },

  invoke: {
    type: 'object',
    since: '4.0.0',
    source: '_.invoke(object, path, [args])',
  },

  keys: {
    type: 'object',
    since: '0.1.0',
    source: '_.keys(object)',
  },

  keysIn: {
    type: 'object',
    since: '3.0.0',
    source: '_.keysIn(object)',
  },

  mapKeys: {
    type: 'object',
    since: '3.8.0',
    source: '_.mapKeys(object, [iteratee=_.identity])',
  },

  mapValues: {
    type: 'object',
    since: '2.4.0',
    source: '_.mapValues(object, [iteratee=_.identity])',
  },

  merge: {
    type: 'object',
    since: '0.5.0',
    source: '_.merge(object, [sources])',
  },

  mergeWith: {
    type: 'object',
    since: '4.0.0',
    source: '_.mergeWith(object, sources, customizer)',
  },

  omit: {
    type: 'object',
    since: '0.1.0',
    source: '_.omit(object, [paths])',
  },

  omitBy: {
    type: 'object',
    since: '4.0.0',
    source: '_.omitBy(object, [predicate=_.identity])',
  },

  pick: {
    type: 'object',
    since: '0.1.0',
    source: '_.pick(object, [paths])',
  },

  pickBy: {
    type: 'object',
    since: '4.0.0',
    source: '_.pickBy(object, [predicate=_.identity])',
  },

  result: {
    type: 'object',
    since: '0.1.0',
    source: '_.result(object, path, [defaultValue])',
  },

  set: {
    type: 'object',
    since: '3.7.0',
    source: '_.set(object, path, value)',
  },

  setWith: {
    type: 'object',
    since: '4.0.0',
    source: '_.setWith(object, path, value, [customizer])',
  },

  toPairs: {
    type: 'object',
    since: '4.0.0',
    source: '_.toPairs(object)',
  },

  toPairsIn: {
    type: 'object',
    since: '4.0.0',
    source: '_.toPairsIn(object)',
  },

  transform: {
    type: 'object',
    since: '1.3.0',
    source: '_.transform(object, [iteratee=_.identity], [accumulator])',
  },

  unset: {
    type: 'object',
    since: '4.0.0',
    source: '_.unset(object, path)',
  },

  update: {
    type: 'object',
    since: '4.6.0',
    source: '_.update(object, path, updater)',
  },

  updateWith: {
    type: 'object',
    since: '4.6.0',
    source: '_.updateWith(object, path, updater, [customizer])',
  },

  values: {
    type: 'object',
    since: '0.1.0',
    source: '_.values(object)',
  },

  valuesIn: {
    type: 'object',
    since: '3.0.0',
    source: '_.valuesIn(object)',
  },

}

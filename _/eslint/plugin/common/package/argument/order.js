export const meta=  {
  type:  `suggestion`,
  schema:[],
  docs:  {
    recommended:false,
    description:`Sort arrow function parameters in decrementing order`,
    category:   `Best Practices`,
  },
};
export const create=u2=>{
  return {
    AsyncArrowFunctionExpression:on_function (A.suggest (u2)),
    ArrowFunctionExpression:     on_function (A.suggest (u2)),
  };
};

const on_function=z1=>o2=>{
  A.each (z1) (reorder (collect (o2)));
};

const reorder=    o1=>{
  return A.order (order) (A.sort (sort) (o1)) (o1);
};

const collect=    o2=>{
  const body=o2.body;
  switch (true) {
  case A.is (`AsyncArrowFunctionExpression`) (body.type): {
    return [];
  }
  case A.is (`ArrowFunctionExpression`) (body.type): {
    return [];
  }
  default: {
    return [
      ... actor (o2),
      ... actee (o2.params),
    ];
  }
  }
};

const order=      o2_1=>o2=>{
  const o2_1_=o2_1.name;
  const o2_=  o2.name;
  switch (true) {
  case A.is (o2_1_) (o2_): {
    return {};
  }
  default: {
    return {
      node:   o2,
      message:`Misarranged argument should be ${o2_1_}.`,
    };
  }
  }
};

const actor=      o2=>{
  const parent=o2.parent;
  switch (true) {
  case A.is (`ArrowFunctionExpression`) (parent.type): {
    return [
      ... actor (parent),
      ... actee (parent.params),
    ];
  }
  default: {
    return [];
  }
  }
};

const actee=      o2=>{
  switch (true) {
  case o2.length > 0: {
    return [
      o2.at (+ 0),
    ];
  }
  default: {
    return [];
  }
  }
};

const sort=       o2_1=>o2=>{
  const setting={
    usage:            `search`,
    sensitivity:      `variant`,
    numeric:          true,
    localeMatcher:    `lookup`,
    ignorePunctuation:false,
    collation:        `default`,
    caseFirst:        `upper`,
  };

  return o2.name.localeCompare (o2_1.name, undefined, setting);
};

const A=          await import (`../a.js`);

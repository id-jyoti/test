export const rules={
  "variable-cover":await import (`./package/variable/cover.js`),
  "variable-align":await import (`./package/variable/align.js`),
  "operator-space":await import (`./package/operator/space.js`),
  "imported-order":await import (`./package/imported/order.js`),
  "function-place":await import (`./package/function/place.js`),
  "exported-order":await import (`./package/exported/order.js`),
  "argument-place":await import (`./package/argument/place.js`),
  "argument-order":await import (`./package/argument/order.js`),
};

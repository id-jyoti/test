export const rule_over={
  "@typescript-eslint/return-await": [
    2,
    `never`,
  ],
  "@typescript-eslint/require-await": [
    2,
  ],
  "@typescript-eslint/only-throw-error": [
    2,
    {
      allowThrowingUnknown:false,
      allowThrowingAny:    false,
    },
  ],
  "@typescript-eslint/no-var-requires": [
    2,
  ],
  "@typescript-eslint/no-useless-constructor": [
    2,
  ],
  "@typescript-eslint/no-use-before-define": [
    0,
  ],
  "@typescript-eslint/no-unused-vars": [
    2,
    {
      varsIgnorePattern:             `^(.+[_·])$`,
      vars:                          `all`,
      ignoreRestSiblings:            false,
      destructuredArrayIgnorePattern:`^(.+[_·])$`,
      caughtErrorsIgnorePattern:     `^(.+[_·])$`,
      caughtErrors:                  `all`,
      argsIgnorePattern:             `^(.+[_·])$`,
      args:                          `all`,
    },
  ],
  "@typescript-eslint/no-unused-expressions": [
    2,
    {
      enforceForJSX:       true,
      allowTernary:        false,
      allowTaggedTemplates:false,
      allowShortCircuit:   false,
    },
  ],
  "@typescript-eslint/no-unnecessary-type-conversion": [
    2,
  ],
  "@typescript-eslint/no-type-alias": [
    0,
  ],
  "@typescript-eslint/no-shadow": [
    2,
    {
      ignoreOnInitialization:false,
      hoist:                 `all`,
      builtinGlobals:        false,
      allow:                 [
        `_`,
      ],
    },
  ],
  "@typescript-eslint/no-restricted-imports": [
    2,
  ],
  "@typescript-eslint/no-redeclare": [
    2,
    {
      ignoreDeclarationMerge:false,
      builtinGlobals:        true,
    },
  ],
  "@typescript-eslint/no-magic-numbers": [
    0,
  ],
  "@typescript-eslint/no-loss-of-precision": [
    2,
  ],
  "@typescript-eslint/no-loop-func": [
    2,
  ],
  "@typescript-eslint/no-invalid-this": [
    2,
    {
      capIsConstructor: false,
    },
  ],
  "@typescript-eslint/no-implied-eval": [
    2,
  ],
  "@typescript-eslint/no-empty-interface": [
    2,
    {
      allowSingleExtends: false,
    },
  ],
  "@typescript-eslint/no-empty-function": [
    2,
    {
      allow: [],
    },
  ],
  "@typescript-eslint/no-dynamic-delete": [
    2,
  ],
  "@typescript-eslint/no-dupe-class-members": [
    2,
  ],
  "@typescript-eslint/no-deprecated": [
    2,
  ],
  "@typescript-eslint/no-array-constructor": [
    2,
  ],
  "@typescript-eslint/init-declarations": [
    2,
    `always`,
  ],
  "@typescript-eslint/dot-notation": [
    2,
    {
      allowPattern: `^$`,
      allowKeywords:true,
    },
  ],
  "@typescript-eslint/default-param-last": [
    2,
  ],
  "@typescript-eslint/consistent-type-definitions": [
    2,
    {
      prefer: `interface`,
    },
  ],
  "@typescript-eslint/consistent-return": [
    2,
    {
      treatUndefinedAsUnspecified: true,
    },
  ],
  "@typescript-eslint/class-methods-use-this": [
    2,
  ],
};
export const rule=     {
  "@typescript-eslint/use-unknown-in-catch-callback-variable": [
    2,
  ],
  "@typescript-eslint/unified-signatures": [
    2,
  ],
  "@typescript-eslint/unbound-method": [
    2,
  ],

  "@typescript-eslint/typedef": [
    2,
  ],
  "@typescript-eslint/triple-slash-reference": [
    2,
  ],
  "@typescript-eslint/switch-exhaustiveness-check": [
    2,
    {
      requireDefaultForNonUnion:          true,
      defaultCaseCommentPattern:          `^$`,
      considerDefaultExhaustiveForUnions: true,
      allowDefaultCaseForExhaustiveSwitch:false,
    },
  ],
  "@typescript-eslint/strict-boolean-expressions": [
    2,
    {
      allowString:                                           false,
      allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing:false,
      allowNumber:                                           false,
      allowNullableString:                                   false,
      allowNullableObject:                                   false,
      allowNullableNumber:                                   false,
      allowNullableEnum:                                     false,
      allowNullableBoolean:                                  false,
      allowAny:                                              false,
    },
  ],
  "@typescript-eslint/sort-type-constituents": [
    2,
    {
      groupOrder: [
        `named`,
        `keyword`,
        `operator`,
        `literal`,
        `function`,
        `import`,
        `conditional`,
        `object`,
        `tuple`,
        `intersection`,
        `union`,
        `nullish`,
      ],
      checkUnions:       true,
      checkIntersections:true,
      caseSensitive:     false,
    },
  ],
  "@typescript-eslint/restrict-template-expressions": [
    0,
  ],
  "@typescript-eslint/restrict-plus-operands": [
    2,
  ],
  "@typescript-eslint/require-array-sort-compare": [
    2,
  ],
  "@typescript-eslint/related-getter-setter-pairs": [
    2,
  ],
  "@typescript-eslint/promise-function-async": [
    0,
  ],
  "@typescript-eslint/prefer-ts-expect-error": [
    2,
  ],
  "@typescript-eslint/prefer-string-starts-ends-with": [
    2,
  ],
  "@typescript-eslint/prefer-return-this-type": [
    2,
  ],
  "@typescript-eslint/prefer-regexp-exec": [
    2,
  ],
  "@typescript-eslint/prefer-reduce-type-parameter": [
    2,
  ],
  "@typescript-eslint/prefer-readonly-parameter-types": [
    0,
  ],
  "@typescript-eslint/prefer-readonly": [
    2,
  ],
  "@typescript-eslint/prefer-promise-reject-errors": [
    2,
  ],
  "@typescript-eslint/prefer-optional-chain": [
    2,
  ],
  "@typescript-eslint/prefer-nullish-coalescing": [
    2,
  ],
  "@typescript-eslint/prefer-namespace-keyword": [
    2,
  ],
  "@typescript-eslint/prefer-literal-enum-member": [
    2,
  ],
  "@typescript-eslint/prefer-includes": [
    2,
  ],
  "@typescript-eslint/prefer-function-type": [
    2,
  ],
  "@typescript-eslint/prefer-for-of": [
    2,
  ],
  "@typescript-eslint/prefer-find": [
    2,
  ],
  "@typescript-eslint/prefer-enum-initializers": [
    2,
  ],
  "@typescript-eslint/prefer-destructuring": [
    2,
    {
      VariableDeclarator: {
        object:false,
        array: false,
      },
      AssignmentExpression: {
        object:false,
        array: false,
      },
    },
    {
      enforceForRenamedProperties: true,
    },
  ],
  "@typescript-eslint/prefer-as-const": [
    2,
  ],
  "@typescript-eslint/parameter-properties": [
    2,
  ],
  "@typescript-eslint/non-nullable-type-assertion-style": [
    2,
  ],
  "@typescript-eslint/no-wrapper-object-types": [
    2,
  ],
  "@typescript-eslint/no-useless-empty-export": [
    2,
  ],
  "@typescript-eslint/no-unsafe-unary-minus": [
    2,
  ],
  "@typescript-eslint/no-unsafe-type-assertion": [
    2,
  ],
  "@typescript-eslint/no-unsafe-return": [
    0,
  ],
  "@typescript-eslint/no-unsafe-member-access": [
    0,
  ],
  "@typescript-eslint/no-unsafe-function-type": [
    2,
  ],
  "@typescript-eslint/no-unsafe-enum-comparison": [
    2,
  ],
  "@typescript-eslint/no-unsafe-declaration-merging": [
    2,
  ],
  "@typescript-eslint/no-unsafe-call": [
    0,
  ],
  "@typescript-eslint/no-unsafe-assignment": [
    0,
  ],
  "@typescript-eslint/no-unsafe-argument": [
    0,
  ],
  "@typescript-eslint/no-unnecessary-type-parameters": [
    2,
  ],
  "@typescript-eslint/no-unnecessary-type-constraint": [
    2,
  ],
  "@typescript-eslint/no-unnecessary-type-assertion": [
    2,
  ],
  "@typescript-eslint/no-unnecessary-type-arguments": [
    2,
  ],
  "@typescript-eslint/no-unnecessary-template-expression": [
    2,
  ],
  "@typescript-eslint/no-unnecessary-qualifier": [
    2,
  ],
  "@typescript-eslint/no-unnecessary-parameter-property-assignment": [
    2,
  ],
  "@typescript-eslint/no-unnecessary-condition": [
    2,
  ],
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": [
    2,
  ],
  "@typescript-eslint/no-this-alias": [
    2,
  ],
  "@typescript-eslint/no-restricted-types": [
    2,
    {
      types: {},
    },
  ],
  "@typescript-eslint/no-require-imports": [
    2,
    {
      allowAsImport:false,
      allow:        [],
    },
  ],
  "@typescript-eslint/no-redundant-type-constituents": [
    2,
  ],
  "@typescript-eslint/no-non-null-assertion": [
    0,
  ],
  "@typescript-eslint/no-non-null-asserted-optional-chain": [
    2,
  ],
  "@typescript-eslint/no-non-null-asserted-nullish-coalescing": [
    2,
  ],
  "@typescript-eslint/no-namespace": [
    2,
  ],
  "@typescript-eslint/no-mixed-enums": [
    2,
  ],
  "@typescript-eslint/no-misused-spread": [
    2,
    {
      allow: [],
    },
  ],
  "@typescript-eslint/no-misused-promises": [
    2,
    {
      checksVoidReturn:  false,
      checksSpreads:     true,
      checksConditionals:true,
    },
  ],
  "@typescript-eslint/no-misused-new": [
    2,
  ],
  "@typescript-eslint/no-meaningless-void-operator": [
    2,
  ],
  "@typescript-eslint/no-invalid-void-type": [
    2,
  ],
  "@typescript-eslint/no-inferrable-types": [
    2,
  ],
  "@typescript-eslint/no-import-type-side-effects": [
    2,
  ],
  "@typescript-eslint/no-for-in-array": [
    2,
  ],
  "@typescript-eslint/no-floating-promises": [
    2,
  ],
  "@typescript-eslint/no-extraneous-class": [
    2,
  ],
  "@typescript-eslint/no-extra-non-null-assertion": [
    2,
  ],
  "@typescript-eslint/no-explicit-any": [
    2,
  ],
  "@typescript-eslint/no-empty-object-type": [
    2,
    {
      allowWithName:   ``,
      allowObjectTypes:`never`,
      allowInterfaces: `never`,
    },
  ],
  "@typescript-eslint/no-duplicate-type-constituents": [
    2,
    {
      ignoreUnions:       false,
      ignoreIntersections:false,
    },
  ],
  "@typescript-eslint/no-duplicate-enum-values": [
    2,
  ],
  "@typescript-eslint/no-confusing-void-expression": [
    2,
  ],
  "@typescript-eslint/no-confusing-non-null-assertion": [
    2,
  ],
  "@typescript-eslint/no-base-to-string": [
    2,
  ],
  "@typescript-eslint/no-array-delete": [
    2,
  ],
  "@typescript-eslint/naming-convention": [
    2,
    {
      suffix:  [],
      selector:[
        `variable`,
      ],
      prefix:   [],
      modifiers:[],
      format:   [],
      custom:   {
        regex:`(^[_$][0-9]*$)|(^[_$]?[A-Z0-9a-zα]+([_][A-Z0-9a-z]+)*[_$]?$)`,
        match:true,
      },
    },
    {
      suffix:  [],
      selector:[
        `parameter`,
      ],
      prefix:   [],
      modifiers:[],
      format:   [],
      custom:   {
        regex:`^([_$]?[a-zα][0-9]+([_$][0-9]+)*[_]?)|([_$][0-9]+[_]?)$`,
        match:true,
      },
    },
  ],
  "@typescript-eslint/method-signature-style": [
    2,
  ],
  "@typescript-eslint/member-ordering": [
    2,
  ],
  "@typescript-eslint/max-params": [
    2,
    {
      max: 1,
    },
  ],
  "@typescript-eslint/explicit-module-boundary-types": [
    0,
  ],
  "@typescript-eslint/explicit-member-accessibility": [
    2,
  ],
  "@typescript-eslint/explicit-function-return-type": [
    0,
  ],
  "@typescript-eslint/consistent-type-imports": [
    2,
  ],
  "@typescript-eslint/consistent-type-exports": [
    2,
  ],
  "@typescript-eslint/consistent-type-definitions": [
    2,
  ],
  "@typescript-eslint/consistent-type-assertions": [
    2,
  ],
  "@typescript-eslint/consistent-indexed-object-style": [
    2,
    `record`,
  ],
  "@typescript-eslint/consistent-generic-constructors": [
    2,
  ],
  "@typescript-eslint/class-literal-property-style": [
    2,
  ],
  "@typescript-eslint/ban-tslint-comment": [
    2,
  ],
  "@typescript-eslint/ban-ts-comment": [
    2,
  ],
  "@typescript-eslint/await-thenable": [
    2,
  ],
  "@typescript-eslint/array-type": [
    2,
    {
      readonly:`generic`,
      default: `generic`,
    },
  ],
  "@typescript-eslint/adjacent-overload-signatures": [
    2,
  ],
};

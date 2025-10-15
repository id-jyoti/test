export const rule={
  "@stylistic/yield-star-spacing": [
    2,
  ],
  "@stylistic/wrap-regex": [
    2,
  ],
  "@stylistic/wrap-iife": [
    2,
  ],
  "@stylistic/type-named-tuple-spacing": [
    2,
  ],
  "@stylistic/type-generic-spacing": [
    2,
  ],
  "@stylistic/type-annotation-spacing": [
    2,
    {
      overrides: {
        variable: {
          before:false,
          after: true,
        },
        returnType: {
          before:false,
          after: true,
        },
        property: {
          before:false,
          after: true,
        },
        parameter: {
          before:false,
          after: true,
        },
        colon: {
          before:false,
          after: true,
        },
        arrow: {
          before:true,
          after: true,
        },
      },
      before:false,
      after: true,
    },
  ],
  "@stylistic/template-tag-spacing": [
    2,
  ],
  "@stylistic/template-curly-spacing": [
    2,
    `never`,
  ],
  "@stylistic/switch-colon-spacing": [
    2,
    {
      before:false,
      after: true,
    },
  ],
  "@stylistic/spaced-comment": [
    2,
    `always`,
    {
      line: {
        markers:   [],
        exceptions:[],
      },
      block: {
        markers:   [],
        exceptions:[],
      },
    },
  ],
  "@stylistic/space-unary-ops": [
    2,
    {
      words:    true,
      overrides:{},
      nonwords: true,
    },
  ],
  "@stylistic/space-infix-ops": [
    0,
  ],
  "@stylistic/space-in-parens": [
    2,
    `never`,
  ],
  "@stylistic/space-before-function-paren": [
    2,
    {
      named:     `always`,
      asyncArrow:`always`,
      anonymous: `always`,
    },
  ],
  "@stylistic/space-before-blocks": [
    2,
    {
      keywords: `always`,
      functions:`always`,
      classes:  `always`,
    },
  ],
  "@stylistic/semi-style": [
    2,
  ],
  "@stylistic/semi-spacing": [
    2,
    {
      before:false,
      after: true,
    },
  ],
  "@stylistic/semi": [
    2,
    `always`,
    {
      omitLastInOneLineBlock: true,
    },
  ],
  "@stylistic/rest-spread-spacing": [
    2,
    `always`,
  ],
  "@stylistic/quotes": [
    2,
    `backtick`,
    {
      avoidEscape:          false,
      allowTemplateLiterals:`always`,
    },
  ],
  "@stylistic/quote-props": [
    2,
    `consistent-as-needed`,
    {
      unnecessary:false,
      numbers:    false,
      keywords:   false,
    },
  ],
  "@stylistic/padding-line-between-statements": [
    2,
    {
      prev:     `*`,
      next:     `*`,
      blankLine:`never`,
    },
    {
      prev: [
        `export`,
      ],
      next: [
        `const`,
      ],
      blankLine: `always`,
    },
    {
      prev: [
        `expression`,
      ],
      next: [
        `return`,
        `const`,
      ],
      blankLine: `always`,
    },
    {
      prev: [
        `return`,
        `const`,
      ],
      next: [
        `expression`,
      ],
      blankLine: `always`,
    },
    {
      prev: [
        `multiline-const`,
      ],
      next: [
        `return`,
        `const`,
      ],
      blankLine: `always`,
    },
    {
      prev: [
        `return`,
        `const`,
      ],
      next: [
        `multiline-const`,
      ],
      blankLine: `always`,
    },
  ],
  "@stylistic/padded-blocks": [
    2,
    {
      switches:`never`,
      classes: `never`,
      blocks:  `never`,
    },
  ],
  "@stylistic/operator-linebreak": [
    2,
    `after`,
    {
      overrides: {},
    },
  ],
  "@stylistic/one-var-declaration-per-line": [
    2,
    `always`,
  ],
  "@stylistic/object-property-newline": [
    2,
    {
      allowAllPropertiesOnSameLine: false,
    },
  ],
  "@stylistic/object-curly-spacing": [
    2,
    `never`,
    {
      objectsInObjects:true,
      arraysInObjects: true,
    },
  ],
  "@stylistic/object-curly-newline": [
    2,
    {
      ObjectPattern: {
        multiline:    true,
        minProperties:1,
      },
      ObjectExpression: {
        multiline:    true,
        minProperties:1,
      },
      ImportDeclaration: {
        multiline:    true,
        minProperties:1,
      },
      ExportDeclaration: {
        multiline:    true,
        minProperties:1,
      },
    },
  ],
  "@stylistic/nonblock-statement-body-position": [
    2,
    `below`,
  ],
  "@stylistic/no-whitespace-before-property": [
    2,
  ],
  "@stylistic/no-trailing-spaces": [
    2,
  ],
  "@stylistic/no-tabs": [
    2,
    {
      allowIndentationTabs: false,
    },
  ],
  "@stylistic/no-multiple-empty-lines": [
    2,
    {
      maxEOF:0,
      maxBOF:0,
      max:   1,
    },
  ],
  "@stylistic/no-multi-spaces": [
    2,
    {
      includeTabs:      true,
      ignoreEOLComments:false,
      exceptions:       {
        VariableDeclarator: true,
      },
    },
  ],
  "@stylistic/no-mixed-spaces-and-tabs": [
    2,
  ],
  "@stylistic/no-mixed-operators": [
    2,
  ],
  "@stylistic/no-floating-decimal": [
    2,
  ],
  "@stylistic/no-extra-semi": [
    2,
  ],
  "@stylistic/no-extra-parens": [
    2,
    `all`,
    {
      ternaryOperandBinaryExpressions:   true,
      returnAssign:                      true,
      nestedConditionalExpressions:      true,
      nestedBinaryExpressions:           true,
      ignoreJSX:                         `multi-line`,
      enforceForSequenceExpressions:     true,
      enforceForFunctionPrototypeMethods:true,
      conditionalAssign:                 true,
      allowParensAfterCommentPattern:    ``,
    },
  ],
  "@stylistic/no-confusing-arrow": [
    2,
    {
      onlyOneSimpleParam:false,
      allowParens:       true,
    },
  ],
  "@stylistic/newline-per-chained-call": [
    2,
    {
      ignoreChainWithDepth: 2,
    },
  ],
  "@stylistic/new-parens": [
    2,
    `never`,
  ],
  "@stylistic/multiline-ternary": [
    2,
  ],
  "@stylistic/multiline-comment-style": [
    2,
    `separate-lines`,
    {
      checkJSDoc: true,
    },
  ],
  "@stylistic/member-delimiter-style": [
    2,
    {
      singleline: {
        requireLast:false,
        delimiter:  `comma`,
      },
      overrides: {
        typeLiteral: {
          singleline: {
            requireLast:false,
            delimiter:  `comma`,
          },
          multiline: {
            requireLast:true,
            delimiter:  `comma`,
          },
        },
        interface: {
          singleline: {
            requireLast:false,
            delimiter:  `comma`,
          },
          multiline: {
            requireLast:true,
            delimiter:  `comma`,
          },
        },
      },
      multilineDetection:`last-member`,
      multiline:         {
        requireLast:true,
        delimiter:  `comma`,
      },
    },
  ],
  "@stylistic/max-statements-per-line": [
    2,
    {
      max: 1,
    },
  ],
  "@stylistic/max-len": [
    2,
    {
      tabWidth:              2,
      ignoreUrls:            false,
      ignoreTrailingComments:false,
      ignoreTemplateLiterals:true,
      ignoreStrings:         false,
      ignoreRegExpLiterals:  true,
      ignorePattern:         `^$`,
      ignoreComments:        false,
      comments:              729,
      code:                  729,
    },
  ],
  "@stylistic/lines-between-class-members": [
    2,
    `always`,
    {
      exceptAfterSingleLine: false,
    },
  ],
  "@stylistic/lines-around-comment": [
    2,
    {
      beforeLineComment:  false,
      beforeBlockComment: false,
      allowTypeStart:     false,
      allowTypeEnd:       false,
      allowObjectStart:   false,
      allowObjectEnd:     false,
      allowModuleStart:   false,
      allowModuleEnd:     false,
      allowInterfaceStart:false,
      allowInterfaceEnd:  false,
      allowEnumStart:     false,
      allowEnumEnd:       false,
      allowClassStart:    false,
      allowClassEnd:      false,
      allowBlockStart:    false,
      allowBlockEnd:      false,
      allowArrayStart:    false,
      allowArrayEnd:      false,
      afterLineComment:   false,
      afterBlockComment:  false,
    },
  ],
  "@stylistic/linebreak-style": [
    2,
    `unix`,
  ],
  "@stylistic/line-comment-position": [
    2,
    {
      position: `above`,
    },
  ],
  "@stylistic/keyword-spacing": [
    2,
    {
      before:true,
      after: true,
    },
  ],
  "@stylistic/key-spacing": [
    2,
    {
      singleLine: {
        mode:       `strict`,
        beforeColon:false,
        afterColon: false,
      },
      multiLine: {
        mode:       `strict`,
        beforeColon:false,
        align:      {
          on:         `value`,
          beforeColon:false,
          afterColon: false,
        },
        afterColon: true,
      },
    },
  ],
  "@stylistic/jsx-wrap-multilines": [
    0,
  ],
  "@stylistic/jsx-tag-spacing": [
    2,
    {
      closingSlash:     `never`,
      beforeSelfClosing:`never`,
      beforeClosing:    `never`,
      afterOpening:     `never`,
    },
  ],
  "@stylistic/jsx-sort-props": [
    2,
    {
      shorthandLast:       true,
      shorthandFirst:      false,
      reservedFirst:       true,
      noSortAlphabetically:false,
      multiline:           `last`,
      locale:              `auto`,
      ignoreCase:          false,
      callbacksLast:       false,
    },
  ],
  "@stylistic/jsx-self-closing-comp": [
    2,
  ],
  "@stylistic/jsx-quotes": [
    2,
    `prefer-double`,
  ],
  "@stylistic/jsx-pascal-case": [
    2,
    {
      allowNamespace:        true,
      allowLeadingUnderscore:false,
      allowAllCaps:          false,
    },
  ],
  "@stylistic/jsx-one-expression-per-line": [
    2,
  ],
  "@stylistic/jsx-newline": [
    2,
    {
      prevent:        true,
      allowMultilines:false,
    },
  ],
  "@stylistic/jsx-max-props-per-line": [
    2,
    {
      maximum: {
        single:9,
        multi: 27,
      },
    },
  ],
  "@stylistic/jsx-indent-props": [
    2,
    2,
  ],
  "@stylistic/jsx-function-call-newline": [
    2,
    `multiline`,
  ],
  "@stylistic/jsx-first-prop-new-line": [
    2,
    `never`,
  ],
  "@stylistic/jsx-equals-spacing": [
    2,
  ],
  "@stylistic/jsx-curly-spacing": [
    2,
    {
      when:    `never`,
      children:{
        when: `never`,
      },
      attributes: {
        when: `never`,
      },
    },
  ],
  "@stylistic/jsx-curly-newline": [
    2,
  ],
  "@stylistic/jsx-curly-brace-presence": [
    2,
    {
      props:            `always`,
      propElementValues:`always`,
      children:         `always`,
    },
  ],
  "@stylistic/jsx-closing-tag-location": [
    0,
  ],
  "@stylistic/jsx-closing-bracket-location": [
    2,
    {
      selfClosing:`line-aligned`,
      nonEmpty:   `line-aligned`,
    },
  ],
  "@stylistic/jsx-child-element-spacing": [
    2,
  ],
  "@stylistic/indent-binary-ops": [
    2,
    2,
  ],
  "@stylistic/indent": [
    2,
    2,
    {
      VariableDeclarator:0,
      SwitchCase:        0,
      StaticBlock:       {
        body: 1,
      },
      outerIIFEBody:           1,
      offsetTernaryExpressions:true,
      ObjectExpression:        1,
      MemberExpression:        1,
      ImportDeclaration:       1,
      ignoredNodes:            [],
      ignoreComments:          false,
      FunctionExpression:      {
        parameters:1,
        body:      1,
      },
      FunctionDeclaration: {
        parameters:1,
        body:      1,
      },
      flatTernaryExpressions:false,
      CallExpression:        {
        arguments: 1,
      },
      ArrayExpression: 1,
    },
  ],
  "@stylistic/implicit-arrow-linebreak": [
    2,
    `beside`,
  ],
  "@stylistic/generator-star-spacing": [
    2,
  ],
  "@stylistic/function-paren-newline": [
    2,
    `consistent`,
  ],
  "@stylistic/function-call-spacing": [
    2,
    `always`,
    {
      allowNewlines: false,
    },
  ],
  "@stylistic/function-call-argument-newline": [
    2,
    `consistent`,
  ],
  "@stylistic/eol-last": [
    2,
    `always`,
  ],
  "@stylistic/dot-location": [
    2,
    `property`,
  ],
  "@stylistic/curly-newline": [
    2,
    `always`,
  ],

  "@stylistic/computed-property-spacing": [
    0,
  ],
  "@stylistic/comma-style": [
    2,
    `last`,
    {
      exceptions: {
        VariableDeclaration:    false,
        ObjectPattern:          false,
        ObjectExpression:       false,
        NewExpression:          false,
        ImportDeclaration:      false,
        FunctionExpression:     false,
        FunctionDeclaration:    false,
        CallExpression:         false,
        ArrowFunctionExpression:false,
        ArrayPattern:           false,
        ArrayExpression:        false,
      },
    },
  ],
  "@stylistic/comma-spacing": [
    2,
    {
      before:false,
      after: true,
    },
  ],
  "@stylistic/comma-dangle": [
    2,
    {
      objects:  `always-multiline`,
      imports:  `always-multiline`,
      functions:`always-multiline`,
      exports:  `always-multiline`,
      arrays:   `always-multiline`,
    },
  ],
  "@stylistic/brace-style": [
    2,
    `stroustrup`,
    {
      allowSingleLine: false,
    },
  ],
  "@stylistic/block-spacing": [
    2,
    `always`,
  ],
  "@stylistic/arrow-spacing": [
    2,
    {
      before:false,
      after: false,
    },
  ],
  "@stylistic/arrow-parens": [
    2,
    `as-needed`,
    {
      requireForBlockBody: false,
    },
  ],
  "@stylistic/array-element-newline": [
    2,
    {
      ArrayPattern: {
        multiline:true,
        minItems: 1,
      },
      ArrayExpression: {
        multiline:true,
        minItems: 1,
      },
    },
  ],
  "@stylistic/array-bracket-spacing": [
    2,
    `never`,
    {
      singleValue:    false,
      objectsInArrays:false,
      arraysInArrays: false,
    },
  ],
  "@stylistic/array-bracket-newline": [
    2,
    {
      multiline:true,
      minItems: 1,
    },
  ],
  "@/func-call-spacing": [
    2,
    `always`,
    {
      allowNewlines: false,
    },
  ],
};

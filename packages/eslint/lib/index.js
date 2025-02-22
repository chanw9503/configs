var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/auto.js
var require_auto = __commonJS({
  "src/auto.js"(exports2, module2) {
    module2.exports = {
      plugin: ["@chanwoopark"],
      extends: ["plugin:@chanwoopark/base"],
      overrides: [
        {
          files: ["**/*.ts?(x)"],
          extends: ["plugin:@chanwoopark/typescript"]
        },
        {
          files: ["**/*.{jsx,tsx}"],
          extends: ["plugin:@chanwoopark/react"]
        },
        {
          files: ["**/*.tsx"],
          rules: {
            "react/prop-types": "off"
          }
        }
      ]
    };
  }
});

// src/base.js
var require_base = __commonJS({
  "src/base.js"(exports2, module2) {
    module2.exports = {
      extends: [
        "plugin:import/errors",
        "eslint:recommended",
        "prettier",
        "plugin:tailwindcss/recommended"
      ],
      plugins: ["prettier", "simple-import-sort"],
      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          semi: true,
          tabWidth: 3,
          useTabs: false,
          trailingComma: "all",
          printWidth: 100,
          arrowParens: "always",
          plugins: ["prettier-plugin-tailwindcss"]
        }
      ],
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "import/no-unresolved": "off",
      "import/prefer-default-export": "off",
      "import/extensions": "off"
    };
  }
});

// src/react.js
var require_react = __commonJS({
  "src/react.js"(exports2, module2) {
    module2.exports = {
      plugins: ["react", "react-hooks", "jsx-a11y"],
      rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
      }
    };
  }
});

// src/typescript.js
var require_typescript = __commonJS({
  "src/typescript.js"(exports2, module2) {
    module2.exports = {
      parser: "@typescript-eslint/parser",
      extends: ["plugin:@typescript-eslint/recommended"],
      rules: {
        "@typescript-eslint/consistent-type-imports": [
          "error",
          {
            prefer: "type-imports",
            disallowTypeAnnotations: false
          }
        ]
      }
    };
  }
});

// index.js
var auto = require_auto();
var base = require_base();
var react = require_react();
var typescript = require_typescript();
module.exports = {
  configs: {
    auto,
    base,
    react,
    typescript
  }
};
/*! For license information please see index.js.LEGAL.txt */
//# sourceMappingURL=index.js.map

module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "overrides": [
    ],
    "parserOptions": {
        "ecmaFeatures" : {
            "jsx":true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "extends": "plugin:react/recommended",
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "react/prop-types": "off"
    }
};

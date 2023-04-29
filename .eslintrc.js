module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "overrides": [
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "prettier"
    ],
    "rules": {
        "react/prop-types": "off"
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
};

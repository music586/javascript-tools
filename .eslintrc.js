module.exports = {
    root: true,
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "extends": "standard",
    "plugins": [
        "standard",
        "promise",
        "html"
    ],
    "rules": {
        "semi": [2, "always"],
        "quotes": [2, "single"]
    }
};
module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        'indent': ['warn', 2],
        'no-console': ['off'],
        //如果没有使用到变量
        'no-unused-vars': ['warn'],
    }
};
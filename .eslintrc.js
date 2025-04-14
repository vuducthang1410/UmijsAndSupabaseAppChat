module.exports = {
  extends: require.resolve('@umijs/max/eslint'),
  rules: {
    // "no-unsafe-finally": "off",  // Tắt lỗi liên quan đến ThrowStatement và ReturnStatement
    // "no-useless-escape": "off",  // Tắt lỗi về ký tự thoát không cần thiết
    // "no-self-compare": "off",     // Tắt lỗi về việc so sánh chính nó
    // "require-yield": "off",      // Tắt lỗi yêu cầu 'yield' trong generator function
    // "no-self-assign": "off",     // Tắt lỗi về việc gán chính nó
    // "react/jsx-uses-react": "off",   // Tắt lỗi về React trong JSX
    // "react/jsx-uses-vars": "off",    // Tắt lỗi về biến trong JSX
    // "react-hooks/rules-of-hooks": "off",  // Tắt lỗi liên quan đến React Hooks
    // "eqeqeq": "off",            // Tắt lỗi liên quan đến == và !=
    // "no-var": "off",             // Tắt lỗi về việc sử dụng var
    // "no-promise-executor-return": "off",  // Tắt lỗi về return trong Promise
    // "guard-for-in": "off",       // Tắt lỗi về vòng lặp for-in
    // "array-callback-return": "off",  // Tắt lỗi yêu cầu giá trị được trả về trong map()
    // "no-param-reassign": "off"   // Tắt lỗi gán lại tham số trong hàm
  }
};

module.exports = {
  extends: require.resolve('@umijs/max/eslint'),
  rules: {
    "eqeqeq": "off",                     // Tắt kiểm tra cho == và !=
    "no-var": "off",                      // Tắt kiểm tra cho việc sử dụng var
    "no-promise-executor-return": "off",  // Tắt kiểm tra return trong Promise executor
    "guard-for-in": "off",               // Tắt kiểm tra cho vòng lặp for-in
    "array-callback-return": "off",      // Tắt kiểm tra yêu cầu giá trị được trả về trong map()
    "no-param-reassign": "off",           // Tắt kiểm tra cho việc gán giá trị cho tham số hàm
    "react-hooks/rules-of-hooks": "off", // Tắt kiểm tra cho các React Hooks
    "react/jsx-uses-react": "off",       // Tắt kiểm tra cho React sử dụng JSX
    "react/jsx-uses-vars": "off"         // Tắt kiểm tra cho biến JSX
  }
};

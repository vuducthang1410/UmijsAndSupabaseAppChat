module.exports = {
  extends: require.resolve('@umijs/max/eslint'),
  rules: {
    "eqeqeq": "off",                    // Tắt kiểm tra cho == và !=
    "no-var": "off",                     // Tắt kiểm tra cho việc sử dụng var
    "no-promise-executor-return": "off", // Tắt kiểm tra return trong Promise executor
    "guard-for-in": "off",              // Tắt kiểm tra cho vòng lặp for-in
    "array-callback-return": "off"      // Tắt kiểm tra yêu cầu giá trị được trả về trong map()
  }
};

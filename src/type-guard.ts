const PrintValue = (value: string | number): void => {
    //console.log(value.toUpperCase()); // This will cause a compile error
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(3));
  }
};

PrintValue('Hello, TypeScript!');
PrintValue(123456);
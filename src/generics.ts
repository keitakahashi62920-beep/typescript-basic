const echo = <T>(value: T): T => {
    return value;
};

console.log(echo<string>('Hello, TypeScript!'));
console.log(echo<number>(42));
console.log(echo<boolean>(true));



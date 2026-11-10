type Title = {title:string};
type Price = {price:number};

type Book = Title & Price;

const book:Book = {
  title: 'TypeScript入門',
  price: 2000
};

console.log(book);

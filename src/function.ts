type calculatetotal = (price:number,shippingfee?:number)=>number;

const calculateTotal:calculatetotal = (price,shippingfee?)=>{

    if (shippingfee === undefined) {
        return price;
    }return price + shippingfee;
};

console.log(calculateTotal(1000));
console.log(calculateTotal(1000,200));
console.log(calculateTotal(1000, undefined));

interface Shop{
    readonly name:string;
    address:string;
    id?:number;
}

const shopA:Shop = {
    name: '侍商店',
    address: '東京都渋谷区',
    id: 1
}

const shopB:Shop = {
    name: '侍商店2号店',
    address: '東京都渋谷区',
    id: 2
}

const shopC:Shop = {
    name: '侍商店3号店',
    address: '東京都渋谷区',
    id: 3
}

console.log(shopA);
console.log(shopB);
console.log(shopC);

class Product {
  public name: string;
  public price: number;
  public category: string;

  constructor(name: string, price: number, category: string) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  describe(): void {
    console.log("同じクラス内のメソッドからアクセスできます。");
    console.log(`商品名: ${this.name}, 価格: ${this.price}, カテゴリ: ${this.category}`);
  }

}

class Drink extends Product {
  describe(): void {
    console.log("継承したクラス内のメソッドからアクセスできます。");
    console.log(`商品名: ${this.name}, 価格: ${this.price}, カテゴリ: ${this.category}`);
  }
}

const shampoo = new Product("シャンプー", 1200, "ヘアケア");
shampoo.describe();

const coffee = new Drink("コーヒー", 500, "飲料");
coffee.describe();

console.log("クラスの外からアクセスできるプロパティ:");
console.log(`商品名: ${shampoo.name}`);
// price and category are not accessible from outside the class.
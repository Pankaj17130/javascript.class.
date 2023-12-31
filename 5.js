 function Product(name ,category,price, stock) {
    this.name= name;
    this.category = category
    this.price = price;
    this.stock = stock;
}
function Inventory() {
    this.Product =[];
};

Inventory.prototype.addProduct = function (product) {
     if (product instanceof Product) {
        this.Product.push (product);
        console.log(`added ${product.name} to the inventory.`);

     }
     else{
        console.log(`Invaild product. please provide a vaild product object.`);

     }
};
Inventory.prototype.deleteProduct = function (productName) {
        const index = this.Product.findIndex(product => productName === product.name);
        if (index !== -1) {
            this.Product.splice(index, 1);
            console.log(`Deleted ${productName} from the inventory.`);
        } else {
            console.log(`${productName} not found in the inventory.`);
        }
    };

const inventory = new Inventory();
const product1 = new Product (`laptop`,`Electronics`,889,10);

inventory.addProduct(product1);
inventory.addProduct(product1);

inventory.deleteProduct('laptop');


// function Product(name, category, price, stock) {
//     this.name = name;
//     this.category = category;
//     this.price = price;
//     this.stock = stock;  // Using stock instead of product
// }

// function Inventory() {
//     this.Product = [];
// }

// Inventory.prototype.addProduct = function (product) {
//     if (product instanceof Product) {
//         this.Product.push(product);
//         console.log(`Added ${product.name} to the inventory.`);
//     } else {
//         console.log(`Invalid product. Please provide a valid product object.`);
//     }
// };

// Inventory.prototype.deleteProduct = function (productName) {
//     const index = this.Product.findIndex(product => productName === product.name);
//     if (index !== -1) {
//         this.Product.splice(index, 1);
//         console.log(`Deleted ${productName} from the inventory.`);
//     } else {
//         console.log(`${productName} not found in the inventory.`);
//     }
// };

// const inventoryInstance = new Inventory();
// const product1 = new Product('laptop', 'Electronics', 889, 10);

// inventoryInstance.addProduct(product1);
// inventoryInstance.addProduct(product1);

// inventoryInstance.deleteProduct('laptop');

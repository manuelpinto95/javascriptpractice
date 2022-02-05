const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get courses() {
    return {
      appetizers: this._courses.appetizers, 
      mains: this._courses.mains, 
      desserts: this._courses.desserts
    };
  },
  get appetizers() {
      if (this._courses.appetizers.length === 0) 
        return undefined;
      return this._courses.appetizers;
  },
  set appetizers(appetizer) {
      this._courses.appetizers = appetizer;
  },
  get mains() {
      if (this._courses.mains.length === 0) 
        return undefined;
      return this._courses.mains;
  },
  set mains(main) {
      this._courses.mains = main;
  },
  get desserts() {
      if (this._courses.desserts.length === 0) 
        return undefined;
      return this._courses.desserts;
  },
  set desserts(dessert) {
      this._courses.desserts = dessert;
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName, 
      price: dishPrice
    };
    if (courseName === 'appetizers' || courseName === 'desserts' || courseName === 'mains') {
      this._courses[courseName].push(dish);
    }
  },
  getRandomDishFromCourse(courseName) {
    const allDishes = [];
    for (let dishIndex in this._courses[courseName]) {
        allDishes.push(this._courses[courseName][dishIndex]);
      }
    return allDishes[Math.floor(Math.random() * allDishes.length)];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    let totalPrice = parseInt(appetizer.price) + parseInt(main.price) + parseInt(dessert.price);
    return `Appetizer: ${appetizer.name} Main: ${main.name} Dessert: ${dessert.name} - Total Price: ${totalPrice}`;
  }
};

menu.addDishToCourse('appetizers', 'peanuts and butter', 3);
menu.addDishToCourse('appetizers', 'strawberries', 5);
menu.addDishToCourse('appetizers', 'pp', 1);
menu.addDishToCourse('mains', 'Codfish and Potatoes', 8);
menu.addDishToCourse('mains', 'Spaghetti', 10);
menu.addDishToCourse('desserts', 'Pudding', 8);
menu.addDishToCourse('desserts', 'Jelly', 3);

console.log(menu.getRandomDishFromCourse('appetizers'));
console.log(menu.generateRandomMeal());

//global hours of operations array
 //"i had () for array instead of []"
const ingredientsArray = ['1 1/2 cups milk ', '1/2 Cup Mascarpone', '1/2 Tsp Pin Salt ', '1 LB Black Mission Figs', '1/2 cup brown sugar ', '2-4 TBSP Water ', '1 1/2 Cups Heavy Cream ', '1/2 Granulated Sugar', '2 egg yolks ', '1 Lemon, Juiced ','2 TBSP Butter ', '1 Cup Honey Roasted Pecans, Roughly Chopped']
const allIngredients = [];
const ulElem = document.getElementById['ingredientsRender'];

function Pizza (ingredientsArray, allIngredients){
    this.ingredientsArray = ingredientsArray;
    this.allIngredients = allIngredients;

    // allIngredients.push(this);
}

Pizza.prototype.render = render;

function render() {
    const parentElement = document.getElementById("ingredientsRender");
  
    const article = document.createElement('article')
    parentElement.appendChild(article);

    const ul = document.createElement('ul')
    parentElement.appendChild(ul);
  
    console.log(this.ingredientsArray [i]);

    for (let i = 0; i < this.ingredientsArray.length; i++){
      const li = document.createElement('li');
      li.textContent = this.ingredientsArray[i];
      ul.appendChild(li);
    }
}

let newPizza = new Pizza(ingredientsArray);{
  allIngredients.push(newPizza);
  console.log(newPizza);
  newPizza.render();
  renderAllPizzas();
}

function renderAllPizzas(){
    for (let i = 0; i < allIngredients.length; i++) {
      allIngredients[i].render();
    }
  }

  const chocoPizza = new Pizza(ingredientsArray, allIngredients);
  chocoPizza.render();

  renderAllPizzas();


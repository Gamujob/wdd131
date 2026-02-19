const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
hamButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hamButton.classList.toggle('open');
});

// Getting the current year
const year = document.querySelector('#currentYear');
const today = new Date();

year.innerHTML = `@${today.getFullYear()} 🌹 Job Gamutambuli 🌹 Uganda`;

//  Getting the last modified
const modified = document.querySelector('#lastModified');
modified.innerHTML = `Lastmodified ${document.lastModified}`;

const cakes = [
  {
    cakeType:"Apple Food Cake",
    imageURL:"https://www.bakingo.com/blog/wp-content/uploads/2020/06/angel-food-cake.jpg"
  },
  {
    cakeType:"Apple Cake",
    imageURL:"https://www.bakingo.com/blog/wp-content/uploads/2020/06/Apple-cake.jpg"
  },
  {
    cakeType:"Banana Cake",
    imageURL:"https://www.bakingo.com/blog/wp-content/uploads/2020/06/banana-cake.jpg"
  },
  {
    cakeType:"Battenberg Cake",
    imageURL:"https://www.bakingo.com/blog/wp-content/uploads/2020/06/Battenberg-Cake.jpg"
  },
  {
    cakeType:"Black Forest Cake",
    imageURL:"https://www.bakingo.com/blog/wp-content/uploads/2020/06/black-forest-cake.jpg"
  },
  {
    cakeType:"Brownie Cake",
    imageURL:"https://www.bakingo.com/blog/wp-content/uploads/2020/06/brownie-cake.jpg"
  },
  {
    cakeType:"Bundt Cake",
    imageURL:"https://www.bakingo.com/blog/wp-content/uploads/2020/06/bundt-cake.jpg"
  },
  {
    cakeType:"Carrot Cake",
    imageURL:"https://www.bakingo.com/blog/wp-content/uploads/2020/06/carrot-cake.jpg"
  },
  {
    cakeType:"Charlotte Cake",
    imageURL:"https://www.bakingo.com/blog/wp-content/uploads/2020/06/Charlotte-Cake.jpg"
  },
  {
    cakeType:"Chocolate Cake",
    imageURL:"https://www.bakingo.com/blog/wp-content/uploads/2020/06/chocolate-cake.jpg"
  },
  {
    cakeType:"Chocolava Cake",
    imageURL:"https://www.bakingo.com/blog/wp-content/uploads/2020/06/chocolava-cake.jpg"
  },
  {
    cakeType:"Coconut Cake",
    imageURL:"https://www.bakingo.com/blog/wp-content/uploads/2020/06/coconut-cake.jpg"
  },
  {
    cakeType:"Coffee Cake",
    imageURL:"https://www.bakingo.com/blog/wp-content/uploads/2020/06/Coffee-cake.jpg"
  },
  {
    cakeType:"Fruit Cake",
    imageURL:"https://www.bakingo.com/blog/wp-content/uploads/2020/06/fruit-cake.jpg"
  }
];


const cakeList = document.getElementById('productList');
createCakeCard(cakes);

function createCakeCard(products) {
  document.querySelector('#productList').innerHTML = "";
  products.forEach(product => {
    const div = document.createElement('div');

    const name = document.createElement('h3');
    name.innerHTML = `<strong>${product.cakeType}</strong>`

    const cakeImage = document.createElement('img');
    cakeImage.src = product.imageURL;
    cakeImage.alt = product.cakeType;
    cakeImage.width = 450;
    cakeImage.loading = 'lazy';

    div.append(name, cakeImage);
    cakeList.appendChild(div);
  });
}
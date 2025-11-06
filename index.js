const cloth = document.getElementById('cloth')
let posts = [

    {
        id: 1,
        image: "https://www.uoozee.com/cdn/shop/files/ba3b2ba16b8eef9aefa446df7751a78b.jpg?v=1750753773&width=1280",
        disciption1: "skylish H-line solid color",
        disciption2: "color skirts bottoms",
        price: "$29.99 USD",
        imag1: "https://www.uoozee.com/cdn/shop/files/2eed27ff-3f8a-4ef4-88bc-9708fda6cb3b.jpg?v=1751856181&width=1280",
        imag2: "https://www.uoozee.com/cdn/shop/files/2eed27ff-3f8a-4ef4-88bc-9708fda6cb3b.jpg?v=1751856181&width=1280"
    },

    {
        id: 2,
        image: "https://www.uoozee.com/cdn/shop/files/a2e5eee11afc4ba74221d24d9f075b05.jpg?v=1750753695&width=1280",
        disciption1: "skylish H-line solid color",
        disciption2: "color skirts bottoms",
        price: "$29.99 USD",
        imag1: "https://www.uoozee.com/cdn/shop/files/2eed27ff-3f8a-4ef4-88bc-9708fda6cb3b.jpg?v=1751856181&width=1280",
        imag2: "https://www.uoozee.com/cdn/shop/files/2eed27ff-3f8a-4ef4-88bc-9708fda6cb3b.jpg?v=1751856181&width=1280"
    },

    {
        id: 3,
        image: "https://www.uoozee.com/cdn/shop/files/7fe90cb6-73e6-4cee-bb34-2583464e92bd.jpg?v=1753068181&width=1280",
        disciption1: "skylish H-line solid color",
        disciption2: "color skirts bottoms",
        price: "$29.99 USD",
        imag1: "https://www.uoozee.com/cdn/shop/files/2eed27ff-3f8a-4ef4-88bc-9708fda6cb3b.jpg?v=1751856181&width=1280",
        imag2: "https://www.uoozee.com/cdn/shop/files/2eed27ff-3f8a-4ef4-88bc-9708fda6cb3b.jpg?v=1751856181&width=1280"
    },

    {
        id: 4,
        image: "https://www.uoozee.com/cdn/shop/files/cbc81f584e6297104dbe5502b96866e6.jpg?v=1748357078&width=1280",
        disciption1: "skylish H-line solid color",
        disciption2: "color skirts bottoms",
        price: "$29.99 USD",
        imag1: "https://www.uoozee.com/cdn/shop/files/2eed27ff-3f8a-4ef4-88bc-9708fda6cb3b.jpg?v=1751856181&width=1280",
        imag2: "https://www.uoozee.com/cdn/shop/files/2eed27ff-3f8a-4ef4-88bc-9708fda6cb3b.jpg?v=1751856181&width=1280"
    },

    {
        id: 5,
        image: "https://www.uoozee.com/cdn/shop/files/114bfe356a22456a89d23e280b975242.jpg?v=1748314610&width=1280",
        disciption1: "skylish H-line solid color",
        disciption2: "color skirts bottoms",
        price: "$29.99 USD",
        imag1: "https://www.uoozee.com/cdn/shop/files/2eed27ff-3f8a-4ef4-88bc-9708fda6cb3b.jpg?v=1751856181&width=1280",
        imag2: "https://www.uoozee.com/cdn/shop/files/2eed27ff-3f8a-4ef4-88bc-9708fda6cb3b.jpg?v=1751856181&width=1280"
    },

    {
        id: 6,
        image: "https://www.uoozee.com/cdn/shop/files/d4e3a433-1fc0-4d67-8fc7-95a04236c91e.jpg?v=1750042293&width=960",
        disciption1: "skylish H-line solid color",
        disciption2: "color skirts bottoms",
        price: "$29.99 USD",
        imag1: "https://www.uoozee.com/cdn/shop/files/2eed27ff-3f8a-4ef4-88bc-9708fda6cb3b.jpg?v=1751856181&width=1280",
        imag2: "https://www.uoozee.com/cdn/shop/files/2eed27ff-3f8a-4ef4-88bc-9708fda6cb3b.jpg?v=1751856181&width=1280"
    },

    {
        id: 7,
        image: "https://www.uoozee.com/cdn/shop/files/92701189-aa28-440b-8d2a-1b798bc19e2f.jpg?v=1753758585&width=1280",
        disciption1: "skylish H-line solid color",
        disciption2: "color skirts bottoms",
        price: "$29.99 USD",
        imag1: "https://www.uoozee.com/cdn/shop/files/2eed27ff-3f8a-4ef4-88bc-9708fda6cb3b.jpg?v=1751856181&width=1280",
        imag2: "https://www.uoozee.com/cdn/shop/files/2eed27ff-3f8a-4ef4-88bc-9708fda6cb3b.jpg?v=1751856181&width=1280"
    },

    {
        id: 8,
        image: "https://www.uoozee.com/cdn/shop/files/ba3b2ba16b8eef9aefa446df7751a78b.jpg?v=1750753773&width=1280",
        disciption1: "skylish H-line solid color",
        disciption2: "color skirts bottoms",
        price: "$29.99 USD",
        imag1: "https://www.uoozee.com/cdn/shop/files/2eed27ff-3f8a-4ef4-88bc-9708fda6cb3b.jpg?v=1751856181&width=1280",
        imag2: "https://www.uoozee.com/cdn/shop/files/2eed27ff-3f8a-4ef4-88bc-9708fda6cb3b.jpg?v=1751856181&width=1280"
    },

    {
        id: 9,
        image: "https://www.uoozee.com/cdn/shop/files/ba3b2ba16b8eef9aefa446df7751a78b.jpg?v=1750753773&width=1280",
        disciption1: "skylish H-line solid color",
        disciption2: "color skirts bottoms",
        price: "$29.99 USD",
        imag1: "https://www.uoozee.com/cdn/shop/files/2eed27ff-3f8a-4ef4-88bc-9708fda6cb3b.jpg?v=1751856181&width=1280",
        imag2: "https://www.uoozee.com/cdn/shop/files/2eed27ff-3f8a-4ef4-88bc-9708fda6cb3b.jpg?v=1751856181&width=1280"
    },
]

posts.forEach(post => {
  const card = document.createElement("div");
  card.className = `
    flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-md 
    w-[200px] sm:w-[230px] md:w-[250px] 
    transition-transform transform hover:scale-105
  `;

  card.innerHTML = `
    <img src="${post.image}" alt="${post.disciption1}" class="h-[260px] w-full object-cover">
    <div class="p-3 text-center">
      <p class="text-sm font-semibold">${post.disciption1}</p>
      <p class="text-gray-600 text-sm">${post.disciption2}</p>
      <p class="text-black font-bold mt-1">${post.price}</p>
      <div class="flex justify-center space-x-2 mt-2">
        <img src="${post.imag1}" class="h-6 w-6 rounded-full object-cover">
        <img src="${post.imag2}" class="h-6 w-6 rounded-full object-cover">
      </div>
    </div>
  `;
  cloth.appendChild(card);
});


const toggleBtn = document.getElementById("rewardToggle");
const rewardContent = document.getElementById("rewardContent");

toggleBtn.addEventListener("click", () => {
  rewardContent.classList.toggle("hidden");
  toggleBtn.classList.toggle("fa-angle-up");
  toggleBtn.classList.toggle("fa-angle-down");
});

const shopToggle = document.getElementById("shopToggle");
const shopDropdown = document.getElementById("shopDropdown");

if (shopToggle && shopDropdown) {
  shopToggle.addEventListener("click", () => {
    shopDropdown.classList.toggle("hidden");
  });
}


const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

const searchBtn = document.getElementById("mobile-search-btn");
const searchBar = document.getElementById("mobile-search");

if (searchBtn && searchBar) {
  searchBtn.addEventListener("click", () => {
    searchBar.classList.toggle("hidden");
  });
}
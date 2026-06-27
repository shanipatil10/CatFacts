const btn = document.querySelector("#generateBtn");

const foodImg = document.querySelector("#foodImg");
const foodName = document.querySelector("#foodName");
const brand = document.querySelector("#brand");
const grade = document.querySelector("#grade");
const country = document.querySelector("#country");
const ingredients = document.querySelector("#ingredients");

const barcodes = [
    "737628064502",
    "3017620422003",
    "7622210449283",
    "5000159484695",
    "5449000000996"
];

btn.addEventListener("click", getFood);

async function getFood(){

    try{

        const randomBarcode =
        barcodes[Math.floor(Math.random() * barcodes.length)];

        const response = await fetch(
            `https://world.openfoodfacts.org/api/v0/product/${randomBarcode}.json`
        );

        const data = await response.json();

        const product = data.product;

        foodName.innerText =
        product.product_name || "Unknown Product";

        brand.innerText =
        product.brands || "Not Available";

        grade.innerText =
        (product.nutrition_grades || "N/A").toUpperCase();

        country.innerText =
        product.countries || "Not Available";

        ingredients.innerText =
        product.ingredients_text
        ? product.ingredients_text.slice(0,180) + "..."
        : "Ingredients not available";

        foodImg.src =
        product.image_url ||
        product.image_front_url ||
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836";

        document
        .querySelector(".glass-card")
        .classList.remove("fade");

        void document
        .querySelector(".glass-card")
        .offsetWidth;

        document
        .querySelector(".glass-card")
        .classList.add("fade");

    }
    catch(error){

        foodName.innerText =
        "Failed to load food data";

        console.log(error);
    }
}

window.onload = getFood;
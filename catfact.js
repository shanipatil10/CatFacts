const factBtn = document.querySelector("#facts");
const factText = document.querySelector("#factText");
const catImg = document.querySelector("#catImg");

const factURL = "https://catfact.ninja/fact";
const catURL = "https://api.thecatapi.com/v1/images/search";

factBtn.addEventListener("click", async () => {

    factText.innerText = "Loading Cat Fact... 🐾";

    try{

        const [factRes, imgRes] = await Promise.all([
            fetch(factURL),
            fetch(catURL)
        ]);

        const factData = await factRes.json();
        const imgData = await imgRes.json();

        factText.innerText = factData.fact;
        catImg.src = imgData[0].url;

        factText.classList.remove("animate");
        catImg.classList.remove("animate");

        void factText.offsetWidth;

        factText.classList.add("animate");
        catImg.classList.add("animate");

    }
    catch(error){

        factText.innerText =
        "Unable to fetch cat fact. Please try again.";

        console.log(error);
    }
});
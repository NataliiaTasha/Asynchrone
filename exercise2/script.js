const button = document.querySelector(".button");
const output = document.querySelector(".output");


const fetchName = (name, country) => fetch(`https://api.agify.io?name=${name}&country_id=${country}`)
.then((response) => response.json());

button.addEventListener("click", function() {
    const input = document.querySelector(".input").value;
    const country = document.querySelector(".country-select").value;    

    if(!input) {
        output.textContent = "Please enter a name.";
        return;
    }

    if(!country) {
        output.textContent = "Please select a country";
        return;
    }

    // localStorage.setItem("input", input);
    // localStorage.setItem("country", country);
    // const name = input;

    const storedData = JSON.parse(localStorage.getItem("userData")) || [];
    const userData = { input, country };

    fetchName(input, country) 
    .then((json) => {
        userData.age = json.age;
        storedData.push(userData);
        localStorage.setItem("userData", JSON.stringify(storedData));
        displayData(userData);
    })
    .catch((error) => {
        console.log("There was an error!");
    });
        
    });
    
    function displayData(userData) {
        
        const { input, age, country } = userData;       
        const countryNames = {
            US: "United States",
            GB: "Great Britain",
            BE: "Belgium",
            UA: "Ukraine",
        };
        const countryName = countryNames[country];
        const name = input;
        console.log(country);
        const para = document.createElement("p");
        para.textContent = `${name} is ${age} years old in ${countryName}.`;
        output.textContent = "";
        document.body.appendChild(para);
    }

    console.log()

window.addEventListener("load", () => {
    const storedData = JSON.parse(localStorage.getItem("userData")) || [];


    storedData.forEach(userData => {
        displayData(userData);
    });

    localStorage.removeItem("userData");

});




 


//     fetchName(input)
//     .then((response) => response.json())
//     .then((json) => {
//         console.log(json.age);
//         const para = document.createElement("p");
//         const age = json.age;
//         para.textContent = `${input} is ${age} years old.`;
//         document.body.appendChild(para);
//     })
//     .catch((error) => {
//         console.log("There was an error!", error);
//     });
// });

// function delay(ms) {
//     return new Promise(resolve => setTimeoutresolve, ms);
// }

// const delayedFetchName = async(name) => {
//     await delay(1000);
//     return fetchName(name);
// }
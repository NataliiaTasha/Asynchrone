const button = document.querySelector(".button");

const fetchName = (name) => fetch("https://api.agify.io?name=" + name)

button.addEventListener("click", function() {
    const input = document.querySelector(".input").value;
    fetchName(input)
    .then((response) => response.json())
    .then((json) => {
        console.log(json.age);
        const para = document.createElement("p");
        const age = json.age;
        para.textContent = `${input} is ${age} years old.`;
        document.body.appendChild(para);
    })
    .catch((error) => {
        console.log("There was an error!", error);
    });
});

function delay(ms) {
    return new Promise(resolve => setTimeoutresolve, ms);
}

const delayedFetchName = async(name) => {
    await delay(1000);
    return fetchName(name);
}
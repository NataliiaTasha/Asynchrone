const button = document.querySelector(".button");
const list = document.createElement("ul");

button.addEventListener("click", function () {
    fetch('movies.json')
        .then(response => response.json())
        .then(data => {
            data['TV Series'].forEach(series => {
                const listItem = document.createElement('li');
                listItem.textContent = `${series['title']} - ${series['number-of-seasons']} seasons - (${series['release']}) - Availible on ${series['where to watch']}`;
                list.appendChild(listItem);
            });
            document.body.appendChild(list);
        })
                .catch(error => console.log("Error fetching data", error));
        });
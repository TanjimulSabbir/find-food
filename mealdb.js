searchFood = () => {
    searchField = document.getElementById("search-field")
    searchText = searchField.value
    console.log(searchText)
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
        .catch()
}
const displaySearchResult = data => {
    searchDiv = document.getElementById("search-result")
    searchDiv.textContent = '';
    data.forEach(meal => {
        console.log(meal)
        const div = document.createElement("div")
        div.classList.add('col');
        div.innerHTML = `
        <div class="col">
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p>${meal.idMeal}</p>
                <p>${meal.strArea}</p>
                <p class="card-text">${meal.strInstructions.slice(0, 500)}</p>
            </div>
        </div>
    </div>`

        searchDiv.appendChild(div)
    });
    const suggestDiv = document.getElementById('suggest-div')
    suggestDiv.textContent = '';
    const p = document.createElement('p')
    p.innerHTML = ` <ul class='bg-success'>
        <h3>Search Suggest</h3>
        <li>Chicken</li>
        <li>Salmon</li>
        <li>Beef</li>
        <li>Pork</li>
        <li>Fish</li>
        <li>Peas</li>
        <li>Pecorino</li>
        <li>Search By Alphabet A/a , B/b, C/c......</li>
    </ul>`
    suggestDiv.appendChild(p)
}
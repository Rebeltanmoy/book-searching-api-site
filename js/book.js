document.getElementById('error-message').style.display = 'none';
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);

    // clear data:
    searchField.value = '';
    document.getElementById('error-message').style.display = 'none';

    if (searchText === '') {
        document.getElementById('error-message').style.display = 'block';
    }
    else {
        // load data:
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.docs))
            .catch(error => displayError(error));
    }
}

const displayError = error => {
    document.getElementById('error-message').style.display = 'block';
}


const displaySearchResult = docs => {
    // console.log(docs);
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';
    if (docs.length === 0) {
        // sow no result fon
    }
    docs.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="https://covers.openlibrary.org/b/id/{cover_i}-M.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p> -->
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Author Name: ${book.author_name[0]}</li>
            <li class="list-group-item">Publisher: ${book.publisher[0]}</li>
            <li class="list-group-item">Published Data: ${book.publish_year[0]}</li>
        </ul>
    </div>
    `;
        searchResult.appendChild(div);
    })
}






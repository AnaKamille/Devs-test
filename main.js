const pessoas = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
    },
    {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
    }
]


function cards() {
    const cards = document.querySelector("#cards");
    let text = " ";
    for (let i = 0; i < pessoas.length; i++) {
        text += `
    <div class="box">
    <div class="close" onclick="excluirCard(${i})">X</div>
    <img src="${pessoas[i].avatar}">
    <div>
        <h1>${pessoas[i].first_name + " " + pessoas[i].last_name}</h1>    
        <i class="fas fa-pencil-alt"></i>
    </div
    <h2>${pessoas[i].email}</h2>


</div>
`
    }
    cards.innerHTML = text;
}
cards()


function excluirCard(card) {
    console.log(pessoas[card].first_name)
    
    name = prompt("Digite o nome desejado:")

    pessoas[card].first_name = name;


    cards();

}

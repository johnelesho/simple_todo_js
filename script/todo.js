const form = document.querySelector('form'),
    time = document.querySelector('#todos ul li:nth-child(2)'),
    todo_text = document.querySelector('#todo-text'),
    card_title = document.querySelector('.collection-item'),
    card = document.querySelector('.collection')

//time.textContent = new Date().toLocaleString();
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (todo_text.value == "") {
       // alert("Enter a task");
    }
    else {
        const newCard = card_title.cloneNode(true)
       //newCard.classList.add('center')
        newCard.firstElementChild.textContent = todo_text.value;
        newCard.querySelector('ul li:nth-child(2)').textContent = new Date().toLocaleString();
       // console.log(newCard);
        //card.appendChild(newCard);
        card_title.parentNode.appendChild(newCard);

        todo_text.value = "";
    }
})

card.addEventListener('click', (e) => {

    if (e.target.nodeName == "UL" || e.target == this.firstElementChild) {

    }

    else if (e.target.textContent.toLowerCase().includes("edit")) {
        // alert("You want to edit");
        if (e.target.parentNode.parentNode.firstElementChild == e.target.parentNode) {
//ensuring that the first element which is the title element is not edited
        }
        else {
            todo_text.value = e.target.parentNode.firstElementChild.textContent
            e.target.parentNode.parentNode.removeChild(e.target.parentNode)
        }

    }

    else if (e.target.textContent.toLowerCase().includes("delete")) {
        // alert("You want to delete");
        if (e.target.parentNode.parentNode.firstElementChild == e.target.parentNode) {
//ensuring that the first element which is the title element is not edited
        }
        else {
            e.target.parentNode.parentNode.removeChild(e.target.parentNode);

        }

    }
    else {
     /*   if (e.target.parentNode.parentNode.firstElementChild == e.target.parentNode) {
//ensuring that the first element which is the title element is not edited
        } else {
            alert("You did not click on any action")
        }
        */

    }
})

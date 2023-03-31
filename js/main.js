console.log('js is wired!');

let theButton = document.querySelector('button'),
    theList = document.querySelector('ul');


let EmmanuelList = {

    task : '20 years old',
    occupation : 'Practices web development, multimedia authoring, graphic and motion design', // String
    hobbies : 'Enjoys collecting collectibles, volunteering and working out',

};

function listProps() {
    if (theList.children.length > 0) {
        theList.innerHTML = "";
        return;
    }

    for (prop in EmmanuelList) {
        console.log(EmmanuelList[prop]);

        let newProp = document.createElement('li'); 
        newProp.textContent = EmmanuelList[prop];
        newProp.classList.add('list-property');

        theList.appendChild(newProp);
    }

}

theButton.addEventListener('click', listProps);
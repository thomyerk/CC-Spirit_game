var playfield = document.querySelector('#playfield')

window.onload = () => {
    for(let item of tiles){
        let spiritTile = document.createElement("div")
        spiritTile.classList.add("card")
        // if(sorszám in (1,12,13,25,26,38,39,48))
        //     spiritTile.onedge = true
        let iconsContainer = spiritTile.insertAdjacentElement('beforeend', cardConstructor("icons-container", null, 0))
        let symbols = iconsContainer.insertAdjacentElement('beforeend', cardConstructor("symbols", item.type, item.symbolCount))        
        let icons = iconsContainer.insertAdjacentElement('beforeend', cardConstructor("icons", item.powerIcon, 1))   
        let howMany = spiritTile.insertAdjacentElement('beforeend', cardConstructor("howMany", null, 0))
        howMany.innerHTML = item.howMany
        playfield.appendChild(spiritTile)
        
    }
}

function cardConstructor(cardElement, itemProperty, symbolCount){
    let createdItem = document.createElement("div")
    createdItem.classList.add(cardElement)
    if(itemProperty !== null){
        for(let i = 0; i < symbolCount; i++){
            let symbol = document.createElement("img")
            symbol.setAttribute("src", './img/' + itemProperty + '.jpg')
            createdItem.insertAdjacentElement('beforeend',symbol)
        }
    }
    return createdItem
}


let tiles = 
[
    {
        "type": 'webspiders',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false
    },
    {
        "type": 'webspiders',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false
    },
    {
        "type": 'bgfvnbnnnv',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": 'sun',
        "draggable": false,
        "onEdge": false,
        "favor": false
    }
]


var playfield = document.querySelector('#playfield')

window.onload = () => {
    for(let i=0; i < 48; i++){
        var item = tiles[Math.floor(Math.random() * tiles.length)];
        let spiritTile = document.createElement("div")
        spiritTile.classList.add("tile")
        // if(sorszám in (0,11,12,23,24,35,36,47))
        //     spiritTile.onedge = true
        let iconsContainer = spiritTile.insertAdjacentElement('beforeend', cardConstructor("icons-container", null, 0))
        let symbols = iconsContainer.insertAdjacentElement('beforeend', cardConstructor("symbols", item.type, item.symbolCount))        
        let icons = iconsContainer.insertAdjacentElement('beforeend', cardConstructor("icons", item.powerIcon, 1))   
        let howMany = spiritTile.insertAdjacentElement('beforeend', cardConstructor("howMany", null, 0))
        howMany.innerHTML = item.howMany
        spiritTile.setAttribute("draggable", true)
        spiritTile.setAttribute("position", i)
        spiritTile.addEventListener("dragstart", dragstart_handler)
        playfield.appendChild(spiritTile)
        tiles.splice(tiles.indexOf(item), 1);
    }
    console.log(tiles);
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

function dragstart_handler(ev) {
    dragged = ev.target
    ev.dataTransfer.setData("text/plain", ev.target.outerHTML);
    ev.dataTransfer.effectAllowed = "move";
    ev.dataTransfer.dropEffect = "move";
    console.log(ev.target)
}

function drop_handler(ev){
    dragged.parentNode.removeChild(dragged)
    ev.target.insertAdjacentElement('beforeend',dragged);
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
        "favor": false,
        "row": null,
        "column":null,
        "position": null

    },
    {
        "type": 'webspiders',
        "howMany": 10,
        "symbolCount": 1,
        "powerIcon": 'sun',
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'adadsad',
        "howMany": 10,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    }

]


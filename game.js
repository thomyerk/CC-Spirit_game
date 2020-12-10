var playfield = document.querySelector('#playfield')

window.onload = () => {
    for(let i=0; i < 48; i++){
        var item = tiles[Math.floor(Math.random() * tiles.length)];
        let spiritTile = document.createElement("div")
        spiritTile.classList.add("tile")
        spiritTile.classList.add("tile"+(i+1))
        if([0,11,12,23,24,35,36,47].includes(i))
            spiritTile.setAttribute("draggable", true)
        if([11,23,35,47].includes(i))
            spiritTile.setAttribute("onedge", true)
        let iconsContainer = spiritTile.insertAdjacentElement('beforeend', cardConstructor("icons-container", null, 0))
        let symbols = iconsContainer.insertAdjacentElement('beforeend', cardConstructor("symbols", item.type, item.symbolCount))        
        let icons = iconsContainer.insertAdjacentElement('beforeend', cardConstructor("icons", item.powerIcon, 1))   
        let howMany = spiritTile.insertAdjacentElement('beforeend', cardConstructor("howMany", null, 0))
        howMany.innerHTML = item.howMany
        spiritTile.setAttribute("position", i)
        spiritTile.addEventListener("dragstart", dragstart_handler)
        playfield.appendChild(spiritTile)
        tiles.splice(tiles.indexOf(item), 1);
    }
}

function cardConstructor(cardElement, itemProperty, symbolCount){
    let createdItem = document.createElement("div")
    createdItem.classList.add(cardElement)
    if(itemProperty !== null){
        for(let i = 0; i < symbolCount; i++){
            let symbol = document.createElement("img")
            symbol.setAttribute("src", './img/' + itemProperty + '.png')
            symbol.setAttribute("draggable", false)
            createdItem.insertAdjacentElement('beforeend',symbol)
        }
    }
    return createdItem
}

function dragstart_handler(ev) {
    if(ev.target.draggable == false){
        e.preventDefault()
    }
    dragged = ev.target
    siblingPrev = null 
    siblingNext = null
    console.log(ev.target.getAttribute("onedge"))
    if(ev.target.getAttribute("onedge") === true){
        siblingPrev = dragged.previousSibling
        siblingPrev.setAttribute("onedge", true)
    }else{
        siblingNext = dragged.nextSibling

    }

}



function drop_handler(ev){
    if(siblingNext){
        siblingNext.setAttribute("draggable", true)
    }
    if(siblingPrev){
        siblingPrev.setAttribute("draggable", true)
        siblingPrev.setAttribute("onedge",true)
    }
    ev.target.insertAdjacentElement('beforeend',dragged);
}


let tiles = 
[
    {
        "type": 'webspiders',
        "howMany": 10,
        "symbolCount": 1,
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
        "type": 'webspiders',
        "howMany": 10,
        "symbolCount": 1,
        "powerIcon": 'moon',
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'webspiders',
        "howMany": 10,
        "symbolCount": 1,
        "powerIcon": 'fire',
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'webspiders',
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
        "type": 'webspiders',
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
        "type": 'webspiders',
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
        "type": 'vines',
        "howMany": 8,
        "symbolCount": 1,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'vines',
        "howMany": 8,
        "symbolCount": 1,
        "powerIcon": 'sun',
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'vines',
        "howMany": 8,
        "symbolCount": 1,
        "powerIcon": 'moon',
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'vines',
        "howMany": 8,
        "symbolCount": 1,
        "powerIcon": 'fire',
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'vines',
        "howMany": 8,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'vines',
        "howMany": 8,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'branches',
        "howMany": 8,
        "symbolCount": 1,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'branches',
        "howMany": 8,
        "symbolCount": 1,
        "powerIcon": 'sun',
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'branches',
        "howMany": 8,
        "symbolCount": 1,
        "powerIcon": 'moon',
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'branches',
        "howMany": 8,
        "symbolCount": 1,
        "powerIcon": 'fire',
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'branches',
        "howMany": 8,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'branches',
        "howMany": 8,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'dewdrops',
        "howMany": 7,
        "symbolCount": 1,
        "powerIcon": 'sun',
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'dewdrops',
        "howMany": 7,
        "symbolCount": 1,
        "powerIcon": 'moon',
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'dewdrops',
        "howMany": 7,
        "symbolCount": 1,
        "powerIcon": 'fire',
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'dewdrops',
        "howMany": 7,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'dewdrops',
        "howMany": 7,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'flowers',
        "howMany": 6,
        "symbolCount": 1,
        "powerIcon": 'sun',
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'flowers',
        "howMany": 6,
        "symbolCount": 1,
        "powerIcon": 'moon',
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'flowers',
        "howMany": 6,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'flowers',
        "howMany": 6,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'fruits',
        "howMany": 6,
        "symbolCount": 1,
        "powerIcon": 'sun',
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'fruits',
        "howMany": 6,
        "symbolCount": 1,
        "powerIcon": 'moon',
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'fruits',
        "howMany": 6,
        "symbolCount": 1,
        "powerIcon": 'fire',
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'fruits',
        "howMany": 6,
        "symbolCount": 1,
        "powerIcon": 'fire',
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'fruits',
        "howMany": 6,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'leaves',
        "howMany": 8,
        "symbolCount": 1,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'leaves',
        "howMany": 8,
        "symbolCount": 1,
        "powerIcon": 'sun',
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'leaves',
        "howMany": 8,
        "symbolCount": 1,
        "powerIcon": 'moon',
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'leaves',
        "howMany": 8,
        "symbolCount": 1,
        "powerIcon": 'fire',
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'leaves',
        "howMany": 8,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'leaves',
        "howMany": 8,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'moss',
        "howMany": 5,
        "symbolCount": 1,
        "powerIcon": 'sun',
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'moss',
        "howMany": 5,
        "symbolCount": 1,
        "powerIcon": 'moon',
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'moss',
        "howMany": 5,
        "symbolCount": 1,
        "powerIcon": 'fire',
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'moss',
        "howMany": 5,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'mushrooms',
        "howMany": 7,
        "symbolCount": 1,
        "powerIcon": 'sun',
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'mushrooms',
        "howMany": 7,
        "symbolCount": 1,
        "powerIcon": 'moon',
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'mushrooms',
        "howMany": 7,
        "symbolCount": 1,
        "powerIcon": 'fire',
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'mushrooms',
        "howMany": 7,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    },
    {
        "type": 'mushrooms',
        "howMany": 7,
        "symbolCount": 2,
        "powerIcon": null,
        "draggable": false,
        "onEdge": false,
        "favor": false,
        "row": null,
        "position": null
    }

]


var playfield = document.querySelector('#playfield')

function addClass(element, data1, data2) {
    element.classList.add(data1)
    element.classList.add(data2)
}

window.onload = () => {
    for(let i=1; i <= 48; i++){
        var item = tiles[Math.floor(Math.random() * tiles.length)];
        let spiritTile = document.createElement("div")
        addClass(spiritTile, "tile", "tile"+i)
        if([1,12,13,24,25,36,37,48].includes(i))
            spiritTile.setAttribute("draggable", true)
        if([12,24,36,48].includes(i))
            spiritTile.setAttribute("onedge", true)
        let iconsContainer = spiritTile.insertAdjacentElement('beforeend', cardConstructor("icons-container", null, 0))
        let symbols = iconsContainer.insertAdjacentElement('beforeend', cardConstructor("symbols", item.type, item.symbolCount))        
        let icons = iconsContainer.insertAdjacentElement('beforeend', cardConstructor("icons", item.powerIcon, 1))   
        let howMany = spiritTile.insertAdjacentElement('beforeend', cardConstructor("howMany", null, 0))
        howMany.innerHTML = item.howMany
        spiritTile.style.backgroundColor = cardColors[item.type]
        spiritTile.addEventListener("dragstart", dragstart_handler)
        playfield.appendChild(spiritTile)
        tiles.splice(tiles.indexOf(item), 1);
    }
}

let cardColors = {
    "webspiders":"#b39ddb",
    "branches": "#a1887f",
    "dewdrops": "#80cbc4",
    "flowers": "#ff7043",
    "fruits": "#f48fb1",
    "leaves": "#b0bec5",
    "moss": "#aed581",
    "mushrooms": "#ffa000",
    "vines": "#fff9c4"
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

let dragged
let siblingPrev
let siblingNext


function dragstart_handler(ev) {
    if(ev.target.draggable == false){
        ev.preventDefault()
    }
    dragged = ev.target  
    if(dragged.getAttribute("onedge") === "true"){
        siblingPrev = dragged.previousSibling
    }else{
        siblingNext = dragged.nextSibling  
    }
}


function drop_handler(ev){
    if(siblingNext){
        siblingNext.setAttribute("draggable", true)
    }
    if(siblingPrev && siblingPrev.nodeType !== 3){
        siblingPrev.setAttribute("draggable", true)
        siblingPrev.setAttribute("onedge",true)
    }else{
        dragged.classList.remove("tile")
        dragged.classList.add("dropped")
        ev.target.insertAdjacentElement('beforeend',dragged)
    }
    dragged.classList.remove("tile")
    dragged.classList.add("dropped")
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


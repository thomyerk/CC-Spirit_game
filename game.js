var playfield = document.querySelector('#playfield')

window.onload = () => {
    for(let i=0; i < 48; i++){
        var item = tiles[Math.floor(Math.random() * tiles.length)];
        let spiritTile = document.createElement("div")
        spiritTile.classList.add("tile")
        spiritTile.classList.add("tile"+(i+1))
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
    console.log(dragged);
    // ev.dataTransfer.setData("text/plain", ev.target.outerHTML);
    // ev.dataTransfer.effectAllowed = "copy";
    // ev.dataTransfer.dropEffect = "copy";
    //ev.target.classList.add("hide")
    //console.log(ev.target);
    //drop_happened(ev.target)
}

function drop_handler(ev){
    // let dragged = ev.dataTransfer.getData('text/plain');
    // console.log(dragged);
    dragged.parentNode.removeChild(dragged)
    ev.target.insertAdjacentElement('beforeend',dragged);
    //drop_happened(ev.)
    //var div = document.createElement('div');
    //console.log(ev);
    //div.innerHTML = dragged
    //ev.target.appendChild(div)
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


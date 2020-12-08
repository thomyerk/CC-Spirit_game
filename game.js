initGame();

function initGame() {

}

// function cardConstructor(cardElement, itemProperty, iconType, symbolCount){
    
//     return tile
// }
for(let item in tiles){
    console.log(item);
    let spiritTile = document.createElement("div")
    spiritTile.classList.add("card")
    // if(sorszám in (1,12,13,25,26,38,39,48))
    //     spiritTile.onedge = true
    let iconsContainer = spiritTile.createElement("div")
    console.log(iconsContainer);
    // let symbols spiritTile.insertAdjacentElement('beforeend', cardConstructor("symbols",item.spiritSymbol,type))
    // //let symbols = cardConstructor("symbols",item.spiritSymbol,type)
    // let icon = cardConstructor("icon",item.powerIcon,null)
    // let howMany = cardConstructor("howMany",item.howMany,type)
    document.body.appendChild(spiritTile)
}



var tiles = 
[
    {
        "type": 'webspiders',
        "howMany": 10,
        "spiritSymbol": 2,
        "powerIcon": 'sun',
        "draggable": false,
        "onEdge": false,
        "favor": false
    },
    {
        "type": 'webspiders',
        "howMany": 10,
        "spiritSymbol": 2,
        "powerIcon": 'sun',
        "draggable": false,
        "onEdge": false,
        "favor": false
    },
    {
        "type": 'webspiders',
        "howMany": 10,
        "spiritSymbol": 2,
        "powerIcon": 'sun',
        "draggable": false,
        "onEdge": false,
        "favor": false
    }
]

console.log(tiles);

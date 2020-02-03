var items = [];



function fetchCatalog(){
    items = [
        {
            "code": "1234",
            "description": "This is the first items of the store",
            "price": 99.65,
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLHCEHdl1uxdnr6HPhmGq4xInxtmiy7oce4JPNpFnbWYsMkZrfJQ&s",
            "category": "Ships",
            "stock": 2,
            "deliveryDays": 180

        },
        {
            "code": "1234",
            "description": "This is the first items of the store",
            "price": 99.65,
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLHCEHdl1uxdnr6HPhmGq4xInxtmiy7oce4JPNpFnbWYsMkZrfJQ&s",
            "category": "Ships",
            "stock": 2,
            "deliveryDays": 180

        },
        {
            "code": "1234",
            "description": "This is the first items of the store",
            "price": 99.65,
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLHCEHdl1uxdnr6HPhmGq4xInxtmiy7oce4JPNpFnbWYsMkZrfJQ&s",
            "category": "Ships",
            "stock": 2,
            "deliveryDays": 180

        },
        {
            "code": "1234",
            "description": "This is the first items of the store",
            "price": 99.65,
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLHCEHdl1uxdnr6HPhmGq4xInxtmiy7oce4JPNpFnbWYsMkZrfJQ&s",
            "category": "Ships",
            "stock": 2,
            "deliveryDays": 180

        }

    ];

}
function displayCatalog(){
    // travel the array
    for(var i=0; i< items.length;i++){
        // get the item
        var item = items[i];
        // draw the item on the DOM (html)
        drawItem(item);
    }

}

function drawItem(item){

    // create the sintax
    var sntx = 
    `<div class='item'> 
        <img src='${item.image}'>

        <label class='code'>${item.code}</label>
        <label class='cat'>${item.category}</label>

        <label class='desc'>${item.description}</label>  

        <label class='price'>${item.price}</label>
        <button class='btn btn-sm btn-info'> + </button>
    </div>`;

    // get the element from the screen
    var container = $("#catalog");

    // append th sintax to the element
    container.append(sntx);

}


function init(){
    console.log("THis is catalog page!");


    // get data

    fetchCatalog();
    displayCatalog();


    // hook events
}

// HTTP methods
// HTTP status codes


window.onload = init;

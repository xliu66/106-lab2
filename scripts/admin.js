function saveItem(){
    // get the values
    var code = $("#txtCode").val();

    var desc = $("#txtDescription").val();
    var prc = $("#txtPrice").val();
    var imge = $("#txtImage").val();
    var categ = $("#txtCategory").val();
    var stk = $("#txtStock").val();
    var ded = $("#txtDeliveryDays").val();
    

    // HOMEWORK :
    // read the values from the rest of the input fields

    console.log(code);
    console.log(desc);
    console.log(prc);
    console.log(imge);
    console.log(categ);
    console.log(stk);
    console.log(ded);

}


function init(){

    console.log("This is Admin page!");
    // retrieve initial data

    // hook events
    $("#btnSave").click(saveItem);

}


window.onload = init;
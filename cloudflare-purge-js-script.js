function treaturl(forminp){
    document.querySelector("[data-testid='custom-purge-btn']").click();
//
    let txa = document.querySelector("[data-testid='custom-purge-entries']");
    document.querySelector("div.c_dl.c_rf.c_dk.c_mu.c_mv.c_mt.c_li.c_be.c_bm.c_bg.c_t.c_rg").click();
    //txa.dispatchEvent(new KeyboardEvent('keypress',  {'key':'h'}));
    txa.value = forminp;
    setTimeout(function() {
        document.querySelector("[data-testid='confirm-custom-purge']").click();
    }, 2000);
    }

var last_index=91;
var forminp="";
var endL=181;
var timerts = setInterval(function () {
    forminp="";

    for(var i =last_index, j=0; j<31 && i<endL; i++,j++){
        forminp += "\r\n" + urls[i];
    }
    last_index = i;
    console.log(forminp);
    treaturl(forminp);
    if(i == endL){ clearInterval(timerts); } 
}, 5000);
console.log(timerts);



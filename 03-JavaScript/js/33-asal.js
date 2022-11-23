
function hesapla(){
    let sayi = document.querySelector("#txtSayi").value;

    sayi = Number(sayi);
    if(!sayi  || isNaN(sayi) || sayi <=1){
    
        //!sayi boş girersem false verir. ! ile true ya çevirip if in içine girmesini sağladık
        //isNaN sayi değil mi ? sayi değilse true verir. 
    
        alert("Lütfen 1 den büyük sayi giriniz");
        return;
    }
    let kontrol = 0;
   
    for(var i = 2 ; i < sayi ; i++){

        if(sayi%i == 0){
            kontrol++
        }
    }
    if(kontrol == 0 ){
        alert("Girilen sayı asal sayıdır");
    }else{
        alert("Girilen sayı asal sayı değildir");
    }

}
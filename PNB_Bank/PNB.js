// carowsel start
  var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[2000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

// carowsel end


/*.................... on click on carowsel next page login .......................*/

document.querySelector(".bankCarowsel").onclick=function(){
    this.style="display:none";
    document.querySelector(".loginWrapper").style="display:block";
}




/*.................... on click  on submit button next page options .......................*/
let balance=50000;

document.querySelector("#submitButton").onclick=function(){
    let x=document.querySelector("#email").value;
    let y=document.querySelector("#pass").value;
    if(x=="taliv@gmail.com" && y=="1234"){
        document.querySelector(".loginWrapper").style="display:none";
        document.querySelector(".waitingPage").style="display:block";
        setTimeout(wating, 5000);

    }
    else if(x=="" && y==""){
        document.querySelector("#emailComment").innerHTML ="Please enter your email";
        document.querySelector("#passComment").innerHTML ="Please enter your password";
        emailClick();
        passClick();
    }
    else if(x!=="taliv@gmail.com" && y=="1234"){
        document.querySelector("#emailComment").innerHTML ="Enter your correct email";
        emailClick();
    }
    else if(x!=="taliv@gmail.com" && y==""){
        document.querySelector("#emailComment").innerHTML ="Enter your correct email";
        document.querySelector("#passComment").innerHTML ="Please enter your password";
        emailClick();
        passClick();
    }
    else if(x=="taliv@gmail.com" && y!=="1234"){
        document.querySelector("#passComment").innerHTML ="Enter your correct password";
        passClick();
    }
    else if(x=="taliv@gmail.com" && y!==""){
        document.querySelector("#passComment").innerHTML ="Please enter your password";
        passClick();
    }
    else if(x=="" && y!=="1234"){
        document.querySelector("#emailComment").innerHTML ="Please enter your email";
        emailClick();
        passClick();
    }
    else{
        document.querySelector("#emailComment").innerHTML ="Enter your correct email";
        document.querySelector("#passComment").innerHTML ="Enter your correct password";
        emailClick();
        passClick();
    }
}



function wating(){
    document.querySelector(".waitingPage").style="display:none";
    document.querySelector("#atmLangOptionsWrapper").style="display:block"
    document.querySelector("#engBtn").onclick=function(){
        langClick(); 
    }
    document.querySelector("#hindiBtn").onclick=function(){
        langClick(); 
    }
    document.querySelector("#punjabiBtn").onclick=function(){
        langClick(); 
    }
}
function langClick(){
    document.querySelector("#atmLangOptionsWrapper").style="display:none";
    document.querySelector("#atmTransactionOptionWrapper").style="display:block";
    document.querySelector("#withDrawal").onclick=function(){
        document.querySelector("#atmTransactionOptionWrapper").style="display:none";
        document.querySelector("#recriptConfirmationWrapper").style="display:block";
        document.querySelector("#withdrawalreceiptYes").onclick=function(){
            document.querySelector("#recriptConfirmationWrapper").style="display:none"
            document.querySelector("#withdrawalPageWrapper").style="display:block"
            onclickWithdrawlconfirmation()
        }

        document.querySelector("#withdrawalreceiptNo").onclick=function(){
            document.querySelector("#recriptConfirmationWrapper").style="display:none"
            document.querySelector("#withdrawalPageWrapper").style="display:block"
        }
    }
    

}



/*..................... functions on click on perform some describe task .................*/

function emailClick(){
    document.querySelector("#email").onclick=function(){
        this.value="";
        document.querySelector("#emailComment").innerHTML ="";
        document.querySelector("#passComment").innerHTML ="";
    }
}
function passClick(){
    document.querySelector("#pass").onclick=function(){
        this.value="";
        document.querySelector("#emailComment").innerHTML ="";
        document.querySelector("#passComment").innerHTML ="";
    }
}

function onclickWithdrawlconfirmation(){
    let y;
    
    document.querySelector("#proceedWithdrawalAmount").onclick=function(){
        y = parseInt(document.querySelector("#withdrawlAmount").value);
        if(y%y==0 && y>0){
            // document.querySelector("#withdrawalComment").innerHTML=`valid value ${y}`; 
            
            if(y>balance){
                document.querySelector("#withdrawalPageWrapper").style="display:none"
                document.querySelector("#withdrawalStatusPageWrapper").style="display:block";
            }else{
                balance=balance-y
                document.querySelector("#withdrawalPageWrapper").style="display:none"
                document.querySelector("#withdrawalStatusParagraph").innerHTML =`Transaction Success <br> your balance is ${balance}`;
                document.querySelector("#withdrawalStatusPageWrapper").style="display:block";
                
            }


        }else{
            document.querySelector("#withdrawalComment").innerHTML=`Invalid Input`;
        }
    }
    document.querySelector("#clearWithdrawalAmount").onclick=function(){
        document.querySelector("#withdrawlAmount").value="";
        document.querySelector("#withdrawalComment").innerHTML=``;
    }
}








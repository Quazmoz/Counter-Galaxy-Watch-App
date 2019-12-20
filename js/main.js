
window.onload = function () {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
	try {
	    tizen.application.getCurrentApplication().exit();
	} catch (ignore) {
	}
    });

    //1count
    var val1 = 1;
    var textbox1 = document.querySelector('#value1');
    textbox1.addEventListener("click", function(){
    	box1 = document.querySelector('#value1');
    	box1.innerHTML = val1;
    	if (val1 > 9){
    		box1.style.left = "40%";
    	}
    	val1++;
    });
    var reset1 = document.querySelector('#reset1');
    
    //2count
    var val2 = 1;
    var textbox2 = document.querySelector('#value2');
    textbox2.addEventListener("click", function(){
    	box2 = document.querySelector('#value2');
    	box2.innerHTML = val2;
    	if (val2 > 9){
    		box2.style.left = "80%";
    	}
    	val2++;    	
    });
    
    var val3 = 1;
    var textbox3 = document.querySelector('#value3');
    textbox3.addEventListener("click", function(){
    	box3 = document.querySelector('#value3');
    	box3.innerHTML = val3;
    	if (val3 > 9){
    		box3.style.left = "40%";
    	}
    	val3++;    	
    });
    
    //2count
    var val4 = 1;
    var textbox4 = document.querySelector('#value4');
    textbox4.addEventListener("click", function(){
    	box4 = document.querySelector('#value4');
    	box4.innerHTML = val4;
    	val4++;    	
    });
    
};
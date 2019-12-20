window.onload = function() {
        // TODO:: Do your initialization job

        // add eventListener for tizenhwkey
        document.addEventListener('tizenhwkey', function(e) {
            if (e.keyName == "back")
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {}
        });


        var val1 = 0;
        var val2 = 0;
        var val3 = 0;
        var val4 = 0;

        //count button 1
        var textbox1 = document.querySelector('#value1');
        textbox1.addEventListener("click", function() {
                    box1 = document.querySelector('#value1');
                    val1++;
                    box1.innerHTML = val1;
                    if (val1 > 9) {
                        box1.style.left = "40%";
                    }
        });

                    //minus button 1
                    var minus1 = document.querySelector('#minus1');
                    minus1.addEventListener("click", function() {
                        box1 = document.querySelector('#value1');
                        val1--;
                        box1.innerHTML = val1;
                        if (val1 > 9) {
                            box1.style.left = "40%";
                        } else {
                            box1.style.left = "45%";
                        }
                    });
                    //reset button1
                    var reset1 = document.querySelector('#reset1');
                    reset1.addEventListener("click", function() {
                        box1 = document.querySelector('#value1');
                        val1 = 0;
                        box1.innerHTML = val1;
                        if (val1 > 9) {
                            box1.style.left = "40%";
                        } else {
                            box1.style.left = "45%";
                        }
                    });

                    //count button 2

                    var textbox2 = document.querySelector('#value2');
                    textbox2.addEventListener("click", function() {
                        box2 = document.querySelector('#value2');
                        val2++;
                        box2.innerHTML = val2;
                        if (val2 > 9) {
                            box2.style.left = "80%";
                        }

                    });
                    
                  //minus button 2
                    var minus2 = document.querySelector('#minus2');
                    minus2.addEventListener("click", function() {
                        box2 = document.querySelector('#value2');
                        val2--;
                        box2.innerHTML = val2;
                        if (val2 > 9) {
                            box2.style.left = "80%";
                        } else {
                            box2.style.left = "90%";
                        }
                    });

                    //reset button2
                    var reset2 = document.querySelector('#reset2');
                    reset2.addEventListener("click", function() {
                        box2 = document.querySelector('#value2');
                        val2 = 0;
                        box2.innerHTML = val2;
                        if (val2 > 9) {
                            box2.style.left = "80%";
                        } else {
                            box2.style.left = "90%";
                        }
                    });

                    //count button 3

                    var textbox3 = document.querySelector('#value3');
                    textbox3.addEventListener("click", function() {
                        box3 = document.querySelector('#value3');
                        val3++;
                        box3.innerHTML = val3;
                        if (val3 > 9) {
                            box3.style.left = "40%";
                        }

                    });
                    
                  //minus button 3
                    var minus3 = document.querySelector('#minus3');
                    minus3.addEventListener("click", function() {
                        box3 = document.querySelector('#value3');
                        val3--;
                        box3.innerHTML = val3;
                        if (val3 > 9) {
                            box3.style.left = "40%";
                        } else {
                            box3.style.left = "45%";
                        }
                    });

                    //reset button3
                    var reset3 = document.querySelector('#reset3');
                    reset3.addEventListener("click", function() {
                        box3 = document.querySelector('#value3');
                        val3 = 0;
                        box3.innerHTML = val3;
                        if (val3 > 9) {
                            box3.style.left = "40%";
                        } else {
                            box3.style.left = "45%";
                        }
                    });

                    //count button 4

                    var textbox4 = document.querySelector('#value4');
                    textbox4.addEventListener("click", function() {
                        box4 = document.querySelector('#value4');
                        val4++;
                        box4.innerHTML = val4;

                    });
                    
                  //minus button 4
                    var minus4 = document.querySelector('#minus4');
                    minus4.addEventListener("click", function() {
                        box4 = document.querySelector('#value4');
                        val4--;
                        box4.innerHTML = val4;
                        
                    });

                    //reset button4
                    var reset4 = document.querySelector('#reset4');
                    reset4.addEventListener("click", function() {
                        box4 = document.querySelector('#value4');
                        val4 = 0;
                        box4.innerHTML = val4;
                    });

                };
"use strict"

    const obj1 = {
        "0": "zero", 
        "42": "answer", 
        "greeting": "Hello",
        "3.14": "PI", 
    };

    function showPropNumberic(obj1) {
        for (let key in obj1) {
           if (!isNaN(key)) {
               console.log(+key)
           }
        }
    }

    console.log(showPropNumberic(obj1));

    
        
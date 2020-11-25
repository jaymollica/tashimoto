window.addEventListener('load', () => {

    let steps = [{
        "question" : "Why did you break with tradition?",
        "options" : [
            {
                "text": "You broke with tradition because you could not relate to your country's history.",
                "value": 1
            },
            {
                "text": "You broke with tradition because you were influenced by newer artists.",
                "value": 2
            },
            {
                "text": "You broke with tradition because you wanted to create new traditions.",
                "value": 3
            },
            {
                "text": "You broke with tradition because you wanted to be noticed.",
                "value": 4
            }
        ],
        "attribute" : "color"
    },{
        "question" : "Why did you move to New York City?",
        "options" : [
            {
                "text": "You moved to New York City because you heard that's where all the artists were.",
                "value": 1
            },
            {
                "text": "You moved to New York City because you felt you needed to leave Japan.",
                "value": 2
            },
            {
                "text": "You moved to New York City because of a movie you saw.",
                "value": 3
            }
        ],
        "attribute" : "grid"
    }, {
        "question" : "How did living in New York City make you feel?",
        "options" : [
            {
                "text": "Living in New York City made you feel inspired.",
                "value": 1
            },
            {
                "text": "Living in New York City made you feel isolated.",
                "value": 2
            }
        ],
        "attribute" : "direction"
    }, {
        "question" : "Why did you stop making art?",
        "options" : [
            {
                "text": "You stopped making art because it did not pay well.",
                "value": 1
            },
            {
                "text": "You stopped making art because you became jaded.",
                "value": 2
            },
            {
                "text": "You stopped making art because you felt inadequate.",
                "value": 3
            },
            {
                "text": "You never stopped making art.",
                "value": 4
            }
        ],
        "attribute" : "number"
    }];

    document.getElementById('step1').innerHTML = "<h2>"+steps[0].question+"</h2>";
    //populateOptions(steps[0].options, "list1");

    document.getElementById('step2').innerHTML = "<h2>"+steps[1].question+"</h2>";
    //populateOptions(steps[1].options, "list2");

    document.getElementById('step3').innerHTML = "<h2>"+steps[2].question+"</h2>";
    //populateOptions(steps[2].options, "list3");

    document.getElementById('step4').innerHTML = "<h2>"+steps[3].question+"</h2>";
    //populateOptions(steps[3].options, "list4");

    function createOptionButtons() {
        for(let i=0;i<4;i++) {
            let button = document.createElement('button');
            let buttonSpan = document.createElement('span');
            buttonSpan.classList.add("button-span");
            button.innerHTML = 1+i;
            button.classList.add("button-options");
            
            button.onclick = function() {
                if(!isAnswered) {
                    socket.emit('answer', {answer: i});
                    isAnswered = true;
                }
            }
            button.appendChild(buttonSpan);
            document.getElementById('answers').appendChild(button);
        }
    }

    function populateOptions(options, eltId) {
        console.log(options);
        let optionsElt = document.getElementById(eltId);
        for(let i=0;i<options.length;i++) {
            let item = document.createElement('li');
            item.innerHTML = options[i].text;
            optionsElt.appendChild(item);
        }
    }

});
// onchange - works when the element change
// function onChangeEvent(){
//     const demo = document.getElementById('demo');

//     demo.onchange = function(){
//         demo.style.background('red');
//     };
// };

// onclick
function onClickEvent(){
    const demo = document.getElementById('demo');

    demo.innerHTML = "Works when you click the button";
    demo.onclick = function () {
        demo.innerHTML = 'Lamaw';
    };
};

// onmouseover
function onMouseOverEvent(){
    const demo = document.getElementById('demo1');

    demo.innerHTML = "works when you hover in this text";
    demo.onmouseover = function (){
        demo.innerHTML = "onmouseover";
    };
};

// onmouseout
function onMouseOutEvent () {
    const demo = document.getElementById('demo2');

    demo.innerHTML = "works when the cursor go out this text";
    demo.onmouseout = function (){
        demo.innerHTML = "onmouseout";
    };
};

// onmousedown
function onMouseDownEvent(){
    const demo = document.getElementById('demo3');

    demo.innerHTML = "works when you click this text";
    demo.onmousedown = function(){
        demo.innerHTML = "onmousedown";
    }
};

// onkeydown
function onKeyDownEvent(){
    const demo = document.getElementById('demo4');

    demo.innerHTML = "works when you click any key on keyboard";
    demo.onkeydown = function(){
        demo.innerHTML = "onkeydown";
    };
};

// onload = works when the preevent loads
window.onload = 
onClickEvent()
onMouseOverEvent()
onMouseOutEvent()
onMouseDownEvent();
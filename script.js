const audio1 = new Audio('./audio/alanzoka.mp3')
const audio2 = new Audio('./audio/waifu.mp3')
const audio3 = new Audio('./audio/monteiro.mp3')
const audio4 = new Audio('./audio/mopaz.mp3')
const audio5 = new Audio('./audio/lero_lero.mp3')
const audio6 = new Audio('./audio/zap.mp3')

var click = new Array(5);
var img = new Array(5)

for(let i = 0; i <= 5; i++){
    click[i] = 1
    img[i] = document.querySelectorAll(`#d${i} > img`)
}

function play1(){
    if(click[0] === 1){
        audio1.play()
        click[0]++
        img[0][0].style.display = 'none';
        img[0][1].style.display = 'block';
    }
    else if(click[0] === 2){
        audio1.pause()
        click[0] = 1
        img[0][0].style.display = 'block';
        img[0][1].style.display = 'none';
    }
    audio1.onended = function(){
        img[0][0].style.display = 'block';
        img[0][1].style.display = 'none';
    }
}
function play2(){
    if(click[1] === 1){
        audio2.play()
        click[1]++
        img[1][0].style.display = 'none';
        img[1][1].style.display = 'block';
    }
    else if(click[1] === 2){
        audio2.pause()
        click[1] = 1
        img[1][0].style.display = 'block';
        img[1][1].style.display = 'none';
    }
    audio2.onended = function(){
        img[1][0].style.display = 'block';
        img[1][1].style.display = 'none';
    }
}
function play3(){
    if(click[2] === 1){
        audio3.play()
        click[2]++
        img[2][0].style.display = 'none';
        img[2][1].style.display = 'block';
    }
    else if(click[2] === 2){
        audio3.pause()
        click[2] = 1
        img[2][0].style.display = 'block';
        img[2][1].style.display = 'none';
    }
    audio3.onended = function(){
        img[2][0].style.display = 'block';
        img[2][1].style.display = 'none';
    }
}
function play4(){
    if(click[3] === 1){
        audio4.play()
        click[3]++
        img[3][0].style.display = 'none';
        img[3][1].style.display = 'block';
    }
    else if(click[3] === 2){
        audio4.pause()
        click[3] = 1
        img[3][0].style.display = 'block';
        img[3][1].style.display = 'none';
    }
    audio4.onended = function(){
        img[3][0].style.display = 'block';
        img[3][1].style.display = 'none';
    }
}
function play5(){
    if(click[4] === 1){
        audio5.play()
        click[4]++
        img[4][0].style.display = 'none';
        img[4][1].style.display = 'block';
    }
    else if(click[4] === 2){
        audio5.pause()
        click[4] = 1
        img[4][0].style.display = 'block';
        img[4][1].style.display = 'none';
    }
    audio5.onended = function(){
        img[4][0].style.display = 'block';
        img[4][1].style.display = 'none';
    }
}
function play6(){
    if(click[5] === 1){
        audio6.play()
        click[5]++
        img[5][0].style.display = 'none';
        img[5][1].style.display = 'block';
    }
    else if(click[5] === 2){
        audio6.pause()
        click[5] = 1
        img[5][0].style.display = 'block';
        img[5][1].style.display = 'none';
    }
    audio6.onended = function(){
        img[5][0].style.display = 'block';
        img[5][1].style.display = 'none';
    }
}

$(document).ready(function(){
    $('#default').click(function(){
        renderCat(defaultDNA)
    })
    $('#random').click(function(){
        var dna = { 
        "faceearsColor" : getRandom1_98(),
        "legsColor" : getRandom1_98(),
        "noseinnerearsColor" : getRandom1_98(),
        "torsoColor" : getRandom1_98(),
        "positionReflect" : getRandom1_3(),
        "tatooChoice" : getRandom1_3(),
        "animatedNails" : getRandom1_2(),
        "animatedEars" : getRandom1_4(),
        "animatedMouth" : getRandom1_2(),
        "lastNum" : 1
         }
        renderCat(dna)
    })

    $('#create').click(function(){})

//Random colors          OBSOLETE      
/*function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}*/

function getRandom1_98(){
    var randomNumber1_98 = Math.floor(Math.random()*87)+10
    return randomNumber1_98
}

function getRandom1_3(){
    var randomNumber1_3 = Math.floor(Math.random()*3)+1
    return randomNumber1_3
}

function getRandom1_4(){
    var randomNumber1_4 = Math.floor(Math.random()*4)+1
    return randomNumber1_4
}

function getRandom1_2(){
    var randomNumber1_2 = Math.floor(Math.random()*2)+1
    return randomNumber1_2
}

/*function genColors(){                OBSOLETE
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}*/

//This function code needs to modified so that it works with Your cat code.
function faceearsColor(color,code) {
    $('.face, #left_ear, #right_ear').css('background', '#' + color)  //This changes the color of the cat
    $('#faceearscode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnafaceears').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function legsColor(color,code) {
    $('.leg1, .leg2, .leg3').css('background', '#' + color)  //This changes the color of the cat
    $('#legscode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnalegs').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function noseinnerearsColor(color,code) {
    $('#nose,.inner_ear').css('background', '#' + color)
    $('#noseinnerearscode').html('code: '+code)
    $('#dnanoseinnerears').html(code)
}

function torsoColor(color,code) {
    $('.torso').css('background', '#' + color)
    $('#torsocode').html('code: '+code)
    $('#dnatorso').html(code)
}

function positionReflect(num) {
    switch (num) {
         case 1:
             normalEyes()
             $('.lights').css('transform','rotate(-24deg)')
             break
         case 2:
             normalEyes()
             $('.lights').css('transform','rotate(-72deg)')
             break
         case 3:
             normalEyes()
             $('.lights').css({'transform','rotate(214deg)'})
             break
    }
    $('#reflectcode').html('code: '+num)
    $('#dnareflect').html(num)
}

function tatooChoice(num) {
    switch (num) {
        case 1:
            normalSkin()
            break
        case 2:
            normalSkin()
            $('#tatoo').find(div).html('class="eth"')
            break
        case 3:
            normalSkin()
            $('#tatoo').find(div).html('class="btc"')
            break
    }
    $('#tatoocode').html('code: '+num)
    $('#dnatatoo').html(num)
}
function animatedNails(num){
    switch (num) {
        case 1:
            normalNails()
            break
        case 2:
            normalNails()
            $('#finger').css('animation-name','nailing')
            break
    }    
    $('#nailscode').html('code: '+num)
    $('#dnaanimatednails').html(num)
}
function animatedEars(num){
    switch (num) {
        
        case 1:
            normalEars()
            break
        case 2: 
            normalEars()
            $('#right_ear').css('animation-name','flying_right_ear')
            $('#left_ear').css('animation-name','flying_left_ear')
            break
        case 3:
            normalEars()
            $('.top').css('animation-name','top_flying')
            break
        case 4:
            normalEars()
            $('#right_ear').css('animation-name','flying_right_ear')
            $('#left_ear').css('animation-name','flying_left_ear')
            $('.top').css('animation-name','top_flying')
            break
    }
    $('#earscode').html('code: '+num)
    $('#dnaanimatedears').html(num)
}

function animatedMouth(num){
    switch (num) {
        case 1:
            normalMouth()
            break
        case 2:
            normalMouth()
            $('#mouth-shut').css('animation-name','chewing')
            break

    }
    $('#mouthcode').html('code: '+num)
    $('#dnaanimatedmouth').html(num)    
}

async function normalEyes(){
    await $('.lights').css({'transform': 'rotate(-72deg)'})
}

async function normalSkin(){
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    await $('#tatoo').find(div).html()

async function normalNails(){
    await $('#finger').css('animation-name':'')
}   

async function normalEars(){
    await $('#right_ear').css('animation-name','')
    await $('#left_ear').css('animation-name','')
    await $('.top').css('animation-name','')
}

async function normalMouth(){
    $('#mouth-shut').css('animation-name','')
}

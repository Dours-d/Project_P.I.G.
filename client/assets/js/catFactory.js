
$(document).ready(function(){
    getDefault_dna();
    $('#default').click(function(){
    getDefault_dna();
    })
    $('#random').click(function(){
    getRandom_dna();
    })
})
     
    


    /*$('#create').click(function(){})*/

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

//Functions that actually do the change.
function faceearsColor(color,code){
    $('.face, #left_ear, #right_ear').css('background', '#' + color)  //This changes the color of the face  and ears
    $('#faceearscode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnafaceears').html(code) //This updates the body color part of the DNA that is displayed below the pig
}

function legsColor(color,code) {
    $('.leg1, .leg2, .leg3').css('background', '#' + color)  //This changes the color of the legs
    $('#legscode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnalegs').html(code) //This updates the body color part of the DNA that is displayed below the pig
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
             $('#lights','#lightsbis').addClass('lights1').removeClass('lights2','lights3')
             break
         case 2:
             normalEyes()
             $('#lights','#lightsbis').addClass('lights2').removeClass('lights1', 'lights3')
             break
         case 3:
             normalEyes()
             $('#lights','#lightsbis').addClass('lights3').removeClass('lights1','lights2')
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
            $('#tatoo').addClass('eth').removeClass('btc')
            break
        case 3:
            normalSkin()
            $('#tatoo').addClass('btc').removeClass('eth')
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
            $('#finger').addClass('anifinger').removeClass('imfinger')
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
            $('#right_ear').addClass('aniright').removeClass('imright')
            $('#left_ear').addClass('anileft').removeClass('imleft')
            break
        case 3:
            normalEars()
            $('.top').addClass('anitop').removeClass('imtop')
            break
        case 4:
            normalEars()
            $('#right_ear').addClass('aniright').removeClass('imright')
            $('#left_ear').addClass('anileft').removeClass('imleft')
            $('#top').addClass('anitop').removeClass('imtop')
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
            $('#mouth').addClass('animouth').removeClass('immouth')
            break

    }
    $('#mouthcode').html('code: '+num)
    $('#dnaanimatedmouth').html(num)    
}

async function normalEyes(){
    await $('#lights','#lightsbis').removeClass('lights1','lights2','lights3')
}

async function normalSkin(){
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    await $('#tatoo').removeClass('eth','btc')
}

async function normalNails(){
    await $('#finger').removeClass('anifinger').addClass('imfinger')
}   

async function normalEars(){
    await $('#right_ear').removeClass('aniright').addClass('imright')
    await $('#left_ear').removeClass('anileft').addClass('imleft')
    await $('#top').removeClass('anitop').addClass('imtop')
}

async function normalMouth(){
    $('#mouth').removeClass('animouth').addClass('immouth')
}


//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

//This function code needs to modified so that it works with Your cat code.
function headColor(color,code) {
    $('.face, #left_ear, #right_ear').css('background', '#' + color)  //This changes the color of the cat
    $('#headcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function mouthColor(color,code) {
    $('.leg1, .leg2, .leg3').css('background', '#' + color)  //This changes the color of the cat
    $('#innerearcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnamouth').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function eyesColor(color,code) {
    $('#nose,.inner_ear').css('background', '#' + color)
    $('#nosecode').html('code: '+code)
    $('#dnaeyes').html(code)
}

function earsColor(color,code) {
    $('.torso').css('background', '#' + color)
    $('#torsocode').html('code: '+code)
    $('#dnaears').html(code)
}

function positionReflect(num,code) {
    $('#reflectcode').html('code: '+code)
    $('#dnareflect').html(num)
    $('.lights').css({'transform','rotate(-24deg)'})
    switch (num) {
        case 1:
            normalEyes()
            $('#positionreflect').html('First')
            $('.lights').css({'transform','rotate(-24deg)'})
            break
        case 2:
            normalEyes()
            $('#positionreflect').html('Second')
            $('.lights').css({'transform','rotate(-72deg)'})
            break
        case 3:
            normalEyes()
            $('#positionreflect').html('Third')
            $('.lights').css({'transform','rotate(214deg)'})
            break

    }
}

function tatooChoice(num,code) {
    $('#tatoocode').html('code: '+code)
    $('#dnatatoo').html(num)
    switch (num) {
        case 1:
            normaldecoration()
            $('#tatoo').find(div).html('class="eth"')
            break
        case 2:
            normaldecoration()
            $('#tatoo').find(div).html('class="eth"')
            break
        case 3:
            normaldecoration()
            $('#tatoo').find(div).html('class="btc"')
            break
    }
}
function animatedNails(num,code){
    $('#nailscode').html('code: '+code)
    $('#dnaanimatednails').html(num)
    switch (num) {
        case 1:
        break
        case 2:
        break

    }    
}
function animatedEars(num,code){
    $('#earscode').html('code: '+code)
    $('#dnaanimatedears').html(num)
    switch (num) {
        case 1: 
            $('#right_ear').css({'animation-name','flying_right_ear'})
            $('#left_ear')css({'animation-name','flying_left_ear'})
            break
        case 2:
            $('.top')css({'animation-name','top_flying'})
            break
        case 3:
            $('#right_ear').css({'animation-name','flying_right_ear'})
            $('#left_ear')css({'animation-name','flying_left_ear'})
            $('.top')css({'animation-name','top_flying'})
        break
    }
}

function animatedMouth(num,code){
    $('#mouthcode').html('code: '+code)
    $('#dnaanimatedmouth').html(num)
    switch (num) {
        case 1:
            $('.top')css({'animation-name','chewing'})
        break
        case 2:
        break

    }    
}


//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {

    $('#dnashape').html(num)
    switch (num) {
        case 1:
            normalEyes()
            $('#eyeName').html('Basic')
            break
    }
}

function decorationVariation(num) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            $('#decorationName').html('Basic')
            normaldecoration()
            break
    }
}

async function normalEyes() {
    await $('.lights').css({'transform': 'rotate(-72deg)'})
}

async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('#tatoo').find(div).html()
}

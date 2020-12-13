
var colors = Object.values(allColors())

var defaultDNA = {
    "headColor" : 31,
    "mouthColor" : 49,
    "eyesColor" : 30,
    "earsColor" : 73,
    //Cattributes
    "eyesShape" : 2,
    "decorationPattern" : 1,
    "decorationMidcolor" : 1,
    "decorationSidescolor" : 1,
    "animation" :  1,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headColor);
  $('#dnamouth').html(defaultDNA.mouthColor);
  $('#dnaeyes').html(defaultDNA.eyesColor);
  $('#dnaears').html(defaultDNA.earsColor);
    
  $('#dnareflect').html(defaultDNA.eyesShape)
  $('#dnatatoo').html(defaultDNA.decorationPattern)
  $('#dnaanimnails').html(defaultDNA.decorationMidcolor)
  $('#dnaanimears').html(defaultDNA.decorationSidescolor)
  $('#dnaanimmouth').html(defaultDNA.animation)
  $('#dnaspecial').html(defaultDNA.lastNum)

  renderCat(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnamouth').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnaears').html()
    dna += $('#dnareflect').html()
    dna += $('#dnatatoo').html()
    dna += $('#dnaanimnails').html()
    dna += $('#dnaanimears').html()
    dna += $('#dnaanimmouth').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderCat(dna){
    headColor(colors[dna.headColor],dna.headColor)
    $('#bodycolor').val(dna.headColor)
    mouthColor(colors[dna.mouthColor],dna.mouthColor)
    $('#mouthcolor').val(dna.mouthColor)
    eyesColor(colors[dna.eyesColor],dna.eyesColor)
    $('#eyescolor').val(dna.eyesColor)
    earsColor(colors[dna.earsColor],dna.earsColor)
    $('#earscolor').val(dna.earsColor)
    positionReflect(colors[dna.positionReflect, dna.positionReflect]) //fake code not working
    $('#positionreflect').val(dna.positionReflect)                    //or working
}

// Changing cat colors
$('#bodycolor').change(()=>{
    var colorVal = $('#bodycolor').val()
    headColor(colors[colorVal],colorVal)
})
$('#mouthcolor').change(()=>{
    var colorVal = $('#mouthcolor').val() 
    mouthColor(colors[colorVal],colorVal)
})
$('#eyescolor').change(()=>{
    var colorVal = $('#eyescolor').val()
    eyesColor(colors[colorVal],colorVal)
})
$('#earscolor').change(()=>{
    var colorVal = $('#earscolor').val()
    earsColor(colors[colorVal],colorVal)
})

$('#positionreflect').change(()=>{                      //also presumadly fake code
    var colorVal = $('#positionreflect').val()          //
    positionReflect(colors[colorVal],colorVal)          //
})
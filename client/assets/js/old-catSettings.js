
var colors = Object.values(allColors())

var defaultDNA = {
    "headColor" : 31,
    "mouthColor" : 49,
    "eyesColor" : 30,
    "earsColor" : 73,
    //Cattributes
    "eyesShape" : 1,
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
  $('#dnaanimatednails').html(defaultDNA.decorationMidcolor)
  $('#dnaanimatedears').html(defaultDNA.decorationSidescolor)
  $('#dnaanimatedmouth').html(defaultDNA.animation)
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
    dna += $('#dnaanimatednails').html()
    dna += $('#dnaanimatedears').html()
    dna += $('#dnaanimatedmouth').html()
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
    
    positionReflect(colors[dna.positionReflect], dna.positionReflect) 
    $('#positionreflect').val(dna.positionReflect)  
    
    tatooChoice(dna.tatooChoice)
    $('#tatoochoice').val(dna.tatooChoice) 
    
    animatedNails(dna.animatedNails)
    $('#animatednails').val(dna.animatedNails)
    
    animatedEars(dna.animatedEars)
    $('#animatedears').val(dna.animatedEars)  
    
    animatedMouth(dna.animatedMouth)
    $('#animatedmouth').val(dna.animatedMouth)               
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
$('#positionreflect').change(()=>{                      
    var colorVal = $('#positionreflect').val()          
    positionReflect(colors[colorVal],colorVal)         
})
$('#tatoochoice').change(()=>{
    var colorVal = $('#tatoochoice').val()
    tatooChoice(colors[colorVal],colorVal)
})
$('#animatednails').change(()=>{
    var colorVal = $('#animatednails').val()
    animatedNails(colors[colorVal],colorVal)                      
})
$('#animatedears').change(()=>{
    var colorVal = $('#animatedears').val()
    animatedEars(colors[colorVal],colorVal)
})
$('#animatedmouth').change(()=>{
    var colorVal = $('animatedmouth').val()
    animatedMouth(colors[colorVal],colorVal)
})
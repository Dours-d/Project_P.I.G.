var colors = Object.values(allColors());
console.log(colors)
var defaultDNA = {
    "faceearsColor" : 31,
    "legsColor" : 49,
    "noseinnerearsColor" : 30,
    "torsoColor" : 73,
    //Cattributes
    "positionReflect" : 1,
    "decorationPattern" : 1,
    "decorationMidcolor" : 1,
    "decorationSidescolor" : 1,
    "animation" :  1,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
  $('#dnafaceears').html(defaultDNA.faceearsColor);
  $('#dnalegs').html(defaultDNA.legsColor);
  $('#dnanoseinnerears').html(defaultDNA.noseinnerearsColor);
  $('#dnatorso').html(defaultDNA.torsoColor);
    
  $('#dnareflect').html(defaultDNA.positionReflect)
  $('#dnatatoo').html(defaultDNA.decorationPattern)
  $('#dnaanimatednails').html(defaultDNA.decorationMidcolor)
  $('#dnaanimatedears').html(defaultDNA.decorationSidescolor)
  $('#dnaanimatedmouth').html(defaultDNA.animation)
  $('#dnaspecial').html(defaultDNA.lastNum)

  renderCat(defaultDNA) //edited out by Dani

});

function getDna(){
    var dna = ''
    dna += $('#dnafaceears').html()
    dna += $('#dnalegs').html()
    dna += $('#dnanoseinnerears').html()
    dna += $('#dnatorso').html()
    dna += $('#dnareflect').html()
    dna += $('#dnatatoo').html()
    dna += $('#dnaanimatednails').html()
    dna += $('#dnaanimatedears').html()
    dna += $('#dnaanimatedmouth').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderCat(dna){                                            
    faceearsColor(colors[dna.faceearsColor],dna.faceearsColor)      
    $('#faceearscolor').val(dna.faceearsColor)                      
                                                            
    legsColor(colors[dna.legsColor],dna.legsColor)       
    $('#legscolor').val(dna.legsColor)
    
    noseinnerearsColor(colors[dna.noseinnerearsColor],dna.noseinnerearsColor)
    $('#noseinnerearscolor').val(dna.noseinnerearsColor)
    
    torsoColor(colors[dna.torsoColor],dna.torsoColor)
    $('#torsocolor').val(dna.torsoColor)
    
    positionReflect(colors[dna.positionReflect], dna.positionReflect) 
    $('#positionreflect').val(dna.positionReflect)  
    
    tatooChoice(colors[dna.tatooChoice],dna.tatooChoice)
    $('#tatoochoice').val(dna.tatooChoice) 
    
    animatedNails(dna.animatedNails)
    $('#animatednails').val(dna.animatedNails)
    
    animatedEars(dna.animatedEars)
    $('#animatedears').val(dna.animatedEars)                
                                                            
    animatedMouth(dna.animatedMouth)                        
    $('#animatedmouth').val(dna.animatedMouth)               
}                                                           

// Changing cat colors
$('#faceearscolor').change(()=>{
    var colorVal = $('#faceearscolor').val();
    faceearsColor(colors[colorVal],colorVal);
})
$('#legscolor').change(()=>{
    var colorVal = $('#legscolor').val() 
    legsColor(colors[colorVal],colorVal)
})
$('#noseinnerearscolor').change(()=>{
    var colorVal = $('#noseinnerearscolor').val()
    noseinnerearsColor(colors[colorVal],colorVal)
})
$('#torsocolor').change(()=>{
    var colorVal = $('#torsocolor').val()
    torsoColor(colors[colorVal],colorVal)
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
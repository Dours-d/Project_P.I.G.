var colors = Object.values(allColors());
console.log(colors)
var defaultDNA = {
    "faceearsColor" : 93,
    "legsColor" : 56,
    "noseinnerearsColor" : 30,
    "torsoColor" : 73,
    //Cattributes
    "positionReflect" : 1,
    "tatooChoice" : 1,
    "animatedNails" : 1,
    "animatedEars" : 1,
    "animatedMouth" :  1,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
  $('#dnafaceears').html(defaultDNA.faceearsColor);
  $('#dnalegs').html(defaultDNA.legsColor);
  $('#dnanoseinnerears').html(defaultDNA.noseinnerearsColor);
  $('#dnatorso').html(defaultDNA.torsoColor);
    
  $('#dnareflect').html(defaultDNA.positionReflect)
  $('#dnatatoo').html(defaultDNA.tatooChoice)
  $('#dnaanimatednails').html(defaultDNA.animatedNails)
  $('#dnaanimatedears').html(defaultDNA.animatedEars)
  $('#dnaanimatedmouth').html(defaultDNA.animatedMouth)
  $('#dnaspecial').html(defaultDNA.lastNum)

  renderCat(defaultDNA) //edited out by Dani

});

function getDna(){
    var dna = {}
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
    
    positionReflect(dna.positionReflect) 
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
    positionReflect(colorVal)         
})
$('#tatoochoice').change(()=>{
    var colorVal = $('#tatoochoice').val()
    tatooChoice(colorVal)
})
$('#animatednails').change(()=>{
    var colorVal = $('#animatednails').val()
    animatedNails(colorVal)                      
})
$('#animatedears').change(()=>{
    var colorVal = $('#animatedears').val()
    animatedEars(colorVal)
})
$('#animatedmouth').change(()=>{
    var colorVal = $('animatedmouth').val()
    animatedMouth(colorVal)
})
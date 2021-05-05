var colors = Object.values(allColors());
console.log(colors)

function getDefault_dna(){
    var dna = {
        "faceearsColor" : 93,
        "legsColor" : 56,
        "noseinnerearsColor" : 30,
        "torsoColor" : 73,
        "positionReflect" : 1,
        "tatooChoice" : 1,
        "animatedNails" : 1,
        "animatedEars" : 1,
        "animatedMouth" :  1,
        "special" :  1
    }
    console.log(dna)
    renderCat(dna)
    return dna
}       

function getRandom_dna(){
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
        "special" : 1
    }
    console.log(dna)
    renderCat(dna)
    print_dna(dna)
    return dna
}


  $('#dnafaceears').html(dna.faceearsColor)
  $('#dnalegs').html(dna.legsColor)
  $('#dnanoseinnerears').html(dna.noseinnerearsColor)
  $('#dnatorso').html(dna.torsoColor)
  $('#dnareflect').html(dna.positionReflect)
  $('#dnatatoo').html(dna.tatooChoice)
  $('#dnaanimatednails').html(dna.animatedNails)
  $('#dnaanimatedears').html(dna.animatedEars)
  $('#dnaanimatedmouth').html(dna.animatedMouth)
  $('#dnaspecial').html(dna.lastNum)

  renderCat(dna)




function print_dna(){ 
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
    var colorVal = $('#legscolor').val(); 
    legsColor(colors[colorVal],colorVal);
})
$('#noseinnerearscolor').change(()=>{
    var colorVal = $('#noseinnerearscolor').val();
    noseinnerearsColor(colors[colorVal],colorVal);
})
$('#torsocolor').change(()=>{
    var colorVal = $('#torsocolor').val();
    torsoColor(colors[colorVal],colorVal);
})
$('#positionreflect').change(()=>{                      
    var colorVal = $('#positionreflect').val();          
    positionReflect(colorVal);         
})
$('#tatoochoice').change(()=>{
    var colorVal = $('#tatoochoice').val();
    tatooChoice(colorVal);
})
$('#animatednails').change(()=>{
    var colorVal = $('#animatednails').val();
    animatedNails(colorVal);                      
})
$('#animatedears').change(()=>{
    var colorVal = $('#animatedears').val();
    animatedEars(colorVal);
})
$('#animatedmouth').change(()=>{
    var colorVal = $('#animatedmouth').val();
    animatedMouth(colorVal);
})
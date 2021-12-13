function validate()

{

    var input = true
      
    
    if((document.getElementById('fname').value).match(/^[A-Za-z0-9]+$/))
    
    {
    
    document.getElementById('finalFNAME').src = 'correct.PNG'
    
    }
    
    else{
    
    document.getElementById('finalFNAME').src = 'wrong.png'
    
    input = false;
    
    }

    if((document.getElementById('lname').value).match(/^[A-Za-z0-9]+$/))
    {
    
    document.getElementById('finalLNAME').src = 'correct.PNG'
    
    }
    
    else
    {
    
    document.getElementById('finalLNAME').src = 'wrong.png'
    
    input = false;
    
    }
    
    
    if((document.getElementById('gender').value) != "select" )
    {
    
    document.getElementById('finalGENDER').src = 'correct.PNG'
    
    }
    
    else
    {
    
    document.getElementById('finalGENDER').src = 'wrong.png'
    
    input = false;
    
    }
    
    
    if((document.getElementById('state').value) != "select" )
    {
    
    document.getElementById('finalSTATE').src = 'correct.PNG'
    
    }
    
    else
    {
    
    document.getElementById('finalSTATE').src = 'wrong.png'
    
    input = false;
    
    }
    
    if(input)
    {

    alert('Validation Success.');
    
    document.getElementById("PersonalInfo").submit();
    
    }
    
    }
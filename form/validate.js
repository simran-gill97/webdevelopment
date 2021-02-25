
function validate()
{
    
    
    var title = document.getElementById("title").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var Day = document.getElementById("Day").value;
    var Month = document.getElementById("Month").value;
    var Year = document.getElementById("Year").value;
    var email = document.getElementById("email").value;
    var Passport = document.getElementById("Passport").value;
    var MOBILE = document.getElementById("MOBILE").value;
    var GENDER = document.getElementsByName("GENDER");
    var Address = document.getElementById("Address").value;
    var City = document.getElementById("City").value;
    var PINCODE = document.getElementById("PINCODE").value;
    
    var STATE = document.getElementById("STATE").value;
    var country = document.getElementById("country").value;
    var country_edu = document.getElementById("country-edu").value;
    var signature = document.getElementById("signature").value;
  
   
    
    
    if (title == "")
    {
        document.getElementById("tittle-msg").innerHTML = "Please select the titile";
        
        return false
        
    }
    else
    {
        document.getElementById("tittle-msg").innerHTML = "";
        
    }
    if(fname == "")
    {
        document.getElementById("fname-msg").innerHTML = "FIRST NAME can not be blank";
        return false
    }
    else
    {
        document.getElementById("fname-msg").innerHTML = "";
        
    }
    if(lname == "")
    {
        document.getElementById("lname-msg").innerHTML = "LAST NAME can not be blank";
        return false
    }
    else
    {
        document.getElementById("lname-msg").innerHTML = "";
    }
        

    if(Day == "")
    {
        document.getElementById("Day-msg").innerHTML = "Day can not be blank";
        return false
    }
    else
    {
        document.getElementById("Day-msg").innerHTML = "";
        
    }

    if(Month == "")
    {
        document.getElementById("Day-msg").innerHTML = "Month can not be blank";
        return false
    }
    else
    {
        document.getElementById("Day-msg").innerHTML = "";
        
    }

    if(Year == "")
    {
        document.getElementById("Day-msg").innerHTML = "Year can not be blank";
        return false
    }
    else
    {
        document.getElementById("Day-msg").innerHTML = "";
        
    }
    debugger;
    
    if(email=="")
    {
        document.getElementById("email-msg").innerHTML = "email can not be blank";
        return false
    }
    else
    {   
        if (IsEMAILVALID(email)) {
            document.getElementById("email-msg").innerHTML="You have entered an invalid email address!";
            
            return (false)
           
            
            
            
            
        }
        else {
            
           
            document.getElementById("email-msg").innerHTML="";
           
           
        }  
                
    }


    if(Passport == "")
    {
        document.getElementById("Passport-msg").innerHTML = "Passport can not be blank";
        return false
    }
    else
    {
        document.getElementById("Passport-msg").innerHTML = "";
        
    }


    if(MOBILE == "")
    {
        document.getElementById("MOBILE-msg").innerHTML = "MOBILE can not be blank";
        return false
    }
    else
    {
        document.getElementById("MOBILE-msg").innerHTML = "";
        
    }
    if(GENDER[0].checked==false && GENDER[1].checked==false)
    {
        document.getElementById("GENDER-msg").innerHTML = "GENDER REQUIRED";
        return false
    }

    else
    {
        document.getElementById("GENDER-msg").innerHTML = "";
        
    }
    if(Address == "")
    {
        document.getElementById("Address-msg").innerHTML = "Address can not be blank";
        return false
    }
    else
    {
        document.getElementById("Address-msg").innerHTML = "";
        
    }



    if(City == "")
    {
        document.getElementById("City-msg").innerHTML = "City can not be blank";
        return false
    }
    else
    {
        document.getElementById("City-msg").innerHTML = "";
        
    }



    if(PINCODE == "")
    {
        document.getElementById("PINCODE-msg").innerHTML = "PINCODE can not be blank";
        return false
    }
    else
    {
        document.getElementById("PINCODE-msg").innerHTML = "";
        
    }



    if(STATE == "")
    {
        document.getElementById("STATE-msg").innerHTML = "STATE can not be blank";
        return false
    }
    else
    {
        document.getElementById("STATE-msg").innerHTML = "";
        
    }
    if(country == "")
    {
        document.getElementById("country-msg").innerHTML = "country_edu can not be blank";
        return false
    }
    else
    {
        document.getElementById("country-msg").innerHTML = "";
        
    }
    if(country_edu == "")
    {
        document.getElementById("country_edu-msg").innerHTML = "country_edu can not be blank";
        return false
    }
    else
    {
        document.getElementById("country_edu-msg").innerHTML = "";
        
    }

    if(Institute == "")
    {
        document.getElementById("Institute-msg").innerHTML = "country_edu can not be blank";
        return false
    }
    else
    {
        document.getElementById("country_edu-msg").innerHTML = "";
        
    }

    if(Level == "")
    {
        document.getElementById("Level-msg").innerHTML = "country_edu can not be blank";
        return false
    }
    else
    {
        document.getElementById("Level-msg").innerHTML = "";
        
    }

    if(Passing == "")
    {
        document.getElementById("Passing-msg").innerHTML = "country_edu can not be blank";
        return false
    }
    else
    {
        document.getElementById("Passing-msg").innerHTML = "";
        
    }



    if(Aggregate == "")
    {
        document.getElementById("Aggregate-msg").innerHTML = "country_edu can not be blank";
        return false
    }
    else
    {
        document.getElementById("Aggregate-msg").innerHTML = "";
        
    }
    if (signature== "")
    {
        document.getElementById("signature-msg").innerHTML = "signature is must";
       
        return false
        
    }
    else
    {
        document.getElementById("signature-msg").innerHTML = "";
        
    }
    
}

function IsEMAILVALID(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(email.value) == false) 
        {
            
            return false;
        }
       
        return true;

};


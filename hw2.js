console.log("hw2.js loaded")


const resetButton = document.getElementById("reset")
       


// slider and date from hw1 //       
const d = new Date(); 
let text= d.toLocaleDateString(); /* Extracts the month date year from your browser  that way we avoid confusion from users locations*/ 
document.getElementById("today").innerHTML= text; /* Finds the element withe the attribute id=today and eneters this using the span tag*/
    


var slider = document.getElementById("myRange")
var output = document.getElementById("range_slider")
output.textContent = slider.value; 

slider.oninput = function() {
output.textContent = this.value;
} 


// wasnt reseting my slider after reset on html made this so that it would 
resetButton.onclick = function() {
    var slider = document.getElementById("myRange");
    var output = document.getElementById("range_slider");
    output.textContent = `0`;
}






//validate user first name
function validateFname() {
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/; 
    ////DO NOT LEAVE SPACES ^^^ HERE WHEN VALIDATING NAME PATTERN or else it will always be wrong
    //chheck to see if first name is empty//
    if (fname == "") { // {} closed off to see if its just empty
        document.getElementById("fname-error").innerHTML = "First name cannot be empty";
        return false;
    } else if (fname != "") { // { <------open brack with else if to checks correct pattern
        if (!fname.match(namePattern)) { // <---- remember to validate our name pattern varible
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes and dashes only.";
       return false;
     } else if(fname.length < 2) { //check to see if name is over 1 charcter 
        document.getElementById("fname-error").innerHTML = "First name cannot be less than 2 characters.";
        return false;
     } else if (fname.length > 30) { //check to make sure name is less than 30
        document.getElementById("fname-error").innerHTML = "First name cannot be more than 30 characters.";
        return false;
     } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
     }

}
}

//validate user mname

function validateMname() {
    let mname = document.getElementById("mname").value;
    const namePattern = /^[A-Z]$/;
    //make mname uppercase //
    mname = mname.toUpperCase();
    document.getElementById("mname").value = mname;
    //incase
    if (!mname.match(namePattern)) {
        document.getElementById("mname-error").innerHTML = "Upper letter case characters only";
        return false;
    } else {
        document.getElementById("mname-error").innerHTML = "";
    }
}


//validate user lname 
function validateLname (){
    lname = document.getElementById("lname").value.trim();
    var namePattern =/^[a-zA-Z'-]+$/;
    if (lname == "") {
        document.getElementById("lname-error").innerHTML = "Cannot leave last name empty";
        return false;
    } else if (lname != "") {
        if(!lname.match(namePattern)) {
            document.getElementById("lname-error").innerHTML = "Letters, apostrophes and dashes only.";
            return false
        } else if (lname.length < 2) {
            document.getElementById("lname-error").innerHTML = "Last name cannot be less than 2 characters.";
            return false
        } else if (lname.length > 30) {
            document.getElementById("lname-error").innerHTML = "Last name cannot be more than 30 characters";
            return false;
        } else {
            document.getElementById("lname-error").innerHTML = "";
            return true;
        }
    }
}


//validate user DOB 120 yrs MAX

function validateDOB() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);
    
    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = 
        "date cannot be in the future";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML =
        "date cannot be more than 120 years ago"
        return false;
    } else {
        document.getElementById("dob-error").innerHTML =
        "";
        return true;
    }

}


//Validate  USER SSN 
function validateSsn() {
   const ssn = document.getElementById("ssn").value;
   //ssn pattern
   const ssnR =/^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

   if (!ssnR.test(ssn)) { //test to see if SSN is valid by our SSNR
    document.getElementById("ssn-error").innerHTML =
    "Please enter a valid ssn";
    return false;
   } else {
    document.getElementById("ssn-error").innerHTML = "";
    return true;
   }
}


// Validate USR ADRS 1
function validateAdress1() {
    var ad1 = document.getElementById("adress1").value;
    console.log(ad1);
    console.log(ad1.length)

    if (ad1.length < 2) {
        document.getElementById("adress1-error").innerHTML = 
        "Please enter a valid adress line";
        return false;
    } else {
        document.getElementById("adress1-error").innerHTML =
        "";
        return true;
    }
}

//validate usr CITY 
function validateCity() {
    city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city-error").innerHTML = "City cannot be be left empty";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}


// validate our ZIP
function validateZip() {
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.replace(/[^\d-]/g,""); //removes all charcters that are not numbers

    if (!zip) {
        document.getElementById("zip-error").innerHTML = 
        "Zip cannot be left empty";
        return false;
    } 
    if (zip.length > 5) {
        zip = zip.slice(0,5) + "-" + zip.slice(5,9); //removes any numeral characters after 5 have been entered
    } else {
        zip =zip.slice(0,5);
    } 
    zipInput.value = zip;
    document.getElementById("zip-error").innerHTML = ""; 
    return true;
}

//validate our Email 

function validateEmail() {
    email = document.getElementById("email").value;
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //expression for email regulation

    if (email == "") {
        document.getElementById("email-error").innerHTML = 
        "Email cannot be left blank ";
        return false;
    } else if (!email.match(emailPattern)) {
        document.getElementById("email-error").innerHTML =
        "Please enter a a valid Email Adress";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}


//validate user phone number

function validatePhonenum() {
    const phoneInput = document.getElementById("phonenum");
    const phone = phoneInput.value.replace(/\D/g, "");// removes non number characters
    //  replace( \D removes any charcter not a digit
    // g apply to all matches
    // "" replace with nothing

    if (phone.length != 10) {
        document.getElementById("phonenum-error").innerHTML =
        "Phone number cannot be left blank";
        return false;
    }

    const formattedPhone =
    phone.slice(0,3) +"-"+ phone.slice(3,6) +"-"+ phone.slice(6,10)
    phoneInput.value = formattedPhone;
    document.getElementById("phonenum-error").innerHTML = "";
    return true;
}

function validateUsername() {
    username = document.getElementById("username").value;

    username = username.toLowerCase() //convert username to lower case
    document.getElementById("username").value = username //displays it as lowercase

    if (username.length === 0) {
        document.getElementById("username-error").innerHTML =
        "Username cannot be left blank";
        return false;
    }

    //username must not start with number | !-not  | NaN-(Not a number)
    //  | username.charAt(0) checks the first character |
    // combine these altogther we can properly validate usernames 
    // that will start with a number //
    if (!isNaN(username.charAt(0))) {
        document.getElementById("username-error").innerHTML =
        "Username cannot begin with a number";
        return false;
    }

    //Check to see if name has only letters number or underscore
    let regex = /^[a-zA-Z0-9_]+$/;
    if (!regex.test(username)) {
        document.getElementById("username-error").innerHTML =
        "Username can only contain letters, numbers, or underscores";
        return false;
    }


    else if (username.length < 5) {
        document.getElementById("username-error").innerHTML = 
        "username cannot be less than 5 characters";
        return false;
    }
    else if (username.length > 30) {
        document.getElementById("username-error").innerHTML =
        "username cannot be more than 30 characters";
        return false;
    }
    
    else {
        document.getElementById("username-error").innerHTML = " ";
        return true;
    }

}

function validatePass() {
    const pass = document.getElementById("pass").value;
    const username = document.getElementById("username").value;

    const errorMessage = [];

    if (!pass.match(/[a-z]/)) {
        errorMessage.push("Please enter at least one lowercase letter");
    }

    if (!pass.match(/[A-Z]/)) {
        errorMessage.push("Please enter at least one uppercase letter");
    }

    if (!pass.match(/[0-9]/)) {
        errorMessage.push("Please enter at least one number");
    }

    if (!pass.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Please enter at least one special character");
    }

    if (pass == username || pass.includes(username)) {
        errorMessage.push("Password cannot contain username");
    }

    const errorContainer = document.querySelector(".pass-message");
    errorContainer.innerHTML = errorMessage
    .map(msg => `<span class='error'>${msg}</span><br>`)
    .join("")

}

function ComfirmPass() {
 pass1 = document.getElementById("pass").value;
 pass2 = document.getElementById("c_pass").value;

 if (pass1 !== pass2) {
    document.getElementById("pass2-error").innerHTML = 
    "Password does not match";
    return false;
 }

 else {
    document.getElementById("pass2-error").innerHTML = "Passwords match";
    return true;
 }
}

function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><tr><th colspan='8'>Review Your Information:</th></tr>";

    for (var i = 0; i < formcontent.elements.length; i++) {
        var el = formcontent.elements[i];
        var datatype = el.type;
        var name = el.name;
        var value = el.value;

        // skip elements with no name
        if (!name) continue;

        switch (datatype) {
            case "checkbox":
                if (el.checked) {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>&#x2713;</td></tr>";
                }
                break;

            case "radio":
                if (el.checked) {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
                break;

            case "range":
                // Only show the slider if the user moved it off the default (0)
                if (value !== "0") {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
                break;

            case "button":
            case "submit":
            case "reset":
                // skip
                break;

            default:
                if (value !== "") {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
        }
    }

    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}
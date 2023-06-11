// Form Validation



function validateGender() {
    let male = document.getElementById("Imale");
    let female = document.getElementById("Ifemale");
    
    if(male.checked==true){
        // alert("Male is checked.");
        return true;
    }
    else if(female.checked==true){
        // alert("female is  checked");
        return true;
        
    }
    else{
        return false;
    }
}

// main validation check

function validate() {
    let name = document.forms["myform"]["fname"].value;
    let number = document.forms["myform"]["fnumber"].value;
    let date = document.forms["myform"]["fdate"].value;
    let pay = document.forms["myform"]["fpay"].value;

    

    if(name=="" || name==" " || name=="  "){
        alert("Name is mandatory and must be filled out ! ");
        return false;
    }
    else if(validateGender()==false){
        alert("Gender is mandatory Select your gender ! ");
        return false;
    }
    else if(number=="" || number==" " || number=="  "){
        alert("Mobile number is mandatory and must be filled out ! ");
        return false;
    }
    else if(date=="" || date==" " || date=="  "){
        alert("Date is mandatory and must be filled out ! ");
        return false;
    }
    else if(pay=="" || pay==" " || pay=="  "){
        alert("Entering your GPay/PhonePay/Paytm number, it is mandatory ! ");
        return false;
    }
    else{
        return true;
    }
}
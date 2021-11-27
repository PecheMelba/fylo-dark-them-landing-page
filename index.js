
console.log(document.getElementById("get-started-free-btn"));
document.getElementById("get-started-free-btn").addEventListener('click', function()
{
    console.log("yyyyy");
        //if mail is correct format
        if(document.getElementById("email-input").validity.valid > 0)
        {            
            document.getElementById("error-msg").style.display = "block";
        }
});
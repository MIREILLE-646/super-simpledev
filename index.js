
	// ====================================================
	// ===========Send email using EmailJs.com

    function sendMail(){
        var params = {
            name : document.getElementById("name").value,
            email : document.getElementById("email").value,
            Telephone : document.getElementById("Pnumber").value,
            message : document.getElementById("message").value,
        };
    
        const serviceID = "service_lehpdsh";
        const templateID = "template_nl839ga";
    
        emailjs.send(serviceID,templateID,params)
        .then(
            (res) =>{
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("Pnumber").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("your message sent successfully");
            } 
        )
        .catch((err)=> console.log(err));
    }
    
        // ====================================================
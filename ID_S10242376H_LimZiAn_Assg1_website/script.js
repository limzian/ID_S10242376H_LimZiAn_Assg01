function sendEmail(){
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    };
    const serviceID = "service_47p1frd"
    const templateID = "template_id2h2ms"

    emailjs.send(serviceID,templateID,params)
    .then(
      res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message has been sent successfully.")
      }
    )
    .catch(err=>console.log(err))
}


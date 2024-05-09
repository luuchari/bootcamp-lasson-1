// Personal Information
let firstName = "Charity";
let lastName = "Mthombeni";
let bio = "Hi my name is Mthombeni Charity, I am a hardworking and a self-driven person, i belive in working hard in order to achive all my goal, i am interented in business more especially in the IT industry and i love working with others and get share my ideas and also get to learn from them.";
let education = "A Degree of IT in business system,A Higher Certificate of IT in support services,Huwaei introduction to AI certificate,Huwaei introduction to 5G,Cisco skills for all introduction to cybersecurity";
let contactInfo = {
    email: "mthombeninhlaluko2@gmail.com",
    phone: "0796854496"
};

// Example function to display personal information
function displayPersonalInfo() {
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Bio: ${bio}`);
    console.log(`Education: ${education}`);
    console.log(`Contact: Email - ${contactInfo.email}, Phone - ${contactInfo.phone}`);
}

// Call functions to display information (for demonstration)
displayPersonalInfo();


function  handleformsubmit(event){
    event.preventDefault()
    //console.log(event)

   //console.log(document);
   const nameInput = document.getElementById("name")
   const emailInput =document.getElementById("email")
   const massageInput = document.getElementById("message")

   //console.log(emailInput);
   const isNameValid =nameInput.value !=='' && nameInput.validity.valid 
console.log(isNameValid);
   const isEmailValid =emailInput.value !=='' && emailInput.validity.valid
   console.log(isEmailValid);}

   let ismassegeValid = false;
   if(massageInput.value !== '') {
     ismassegeValid = true
   } else {
    ismassegeValid = false
   }
   console.log(isEmailValid);
   isFormValid =isNameValid && isEmailValid && ismassegeVali
   if(isFormValid) {
    //grab our dat from the form
    const formData =new formData(event.target)
    console.log(formData)
    fetch('https://formspree.io/f/mbjnqqej',{
        method: 'post',
        data: formData,
        header: {
            'Accept': 'application/json'
        }

    })
    const data = await response.json()
    console.log(data)
            arlet ('Email succefully sent')
        }
    console.log('code is running');
    const arr = ['hi', 'there','hey']
    console.log(arr);
    arr.forEach((item)=>{
        console.log(item)
    })
    console.log(8+9);

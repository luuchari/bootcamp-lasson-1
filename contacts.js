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

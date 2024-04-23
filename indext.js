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

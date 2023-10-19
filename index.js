document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.feedback_service_input');
    
    const inputFullname = document.getElementById('input_contact_fullname');
    const textFullname = document.getElementById('input_contact_textfullname');

    const inputEmail = document.getElementById('input_contact_email');
    const inputFullEmail = document.getElementById('input_contact_fullemail');

    const inputSelectDay = document.getElementById('select_day_form');
    const inputSelectFullDay = document.getElementById('select_day_fullform');

    const inputTime = document.getElementById('input_time_contact');
    const inputFullTime = document.getElementById('input_fulltime_contact');

    const inputTextarea = document.getElementById('input_textarea');
    const inputFullTextarea = document.getElementById('input_fulltextarea_contact');

    const greenColor = '#004D40';
    const redColor = '#B71C1C';

    form.addEventListener("submit", handleSubmit);
    function handleSubmit(event) {
        event.preventDefault(); 
            const fullname = inputFullname.value;
            if (fullname.length >=3 ){
                textFullname.textContent = `Your fullname ${fullname} was added`;
                textFullname.style.color = greenColor;
                inputFullname.style.borderColor = greenColor;
            } else {
                textFullname.textContent ='The name must have at least 3 characters';
                textFullname.style.color = redColor;
                inputFullname.style.borderColor = redColor;
            }

            const email = inputEmail.value;
        if (email === '') {
            inputFullEmail.textContent = 'Please enter your email';
            inputFullEmail.style.color = redColor;
            inputEmail.style.borderColor = redColor;
        } else {
            inputFullEmail.textContent = `Your email ${email} was added`;
            inputFullEmail.style.color = greenColor;
            inputEmail.style.borderColor = greenColor;
        }
        
             const selectDay = inputSelectDay.value;
        if (selectDay === "select") {
            inputSelectFullDay.textContent = 'Please select day!';
            inputSelectFullDay.style.color = redColor;
            inputSelectDay.style.borderColor = redColor;
        } else {
            inputSelectFullDay.textContent = 'The day was selected';
            inputSelectFullDay.style.color = greenColor;
            inputSelectDay.style.borderColor = greenColor;
            inputSelectDay.style.textColor = greenColor;
        }

            const selectTime = inputTime.value;
            if (selectTime === "selected") {
                inputFullTime.textContent = 'Please select time!';
                inputFullTime.style.color = redColor;
                inputTime.style.borderColor = redColor;
            } else {
                inputFullTime.textContent = 'Time was selected!';
                inputFullTime.style.color = greenColor;
                inputTime.style.borderColor = greenColor;
                inputFullTime.style.text = greenColor;
            

        }

            const fullMessage = inputTextarea.value;
            const messageLength = fullMessage.length;
            if (messageLength >= 3) {
                inputFullTextarea.textContent = 'Your message was added';
                inputFullTextarea.style.color = greenColor;
                inputTextarea.style.borderColor = greenColor;
            } else if (messageLength === 0) {
                inputFullTextarea.textContent = 'Please add some text';
                inputFullTextarea.style.color = redColor; 
                inputTextarea.style.borderColor = redColor;
            } else {
                inputFullTextarea.textContent = 'Please add at least 3 characters';
                inputFullTextarea.style.color = redColor;
                inputTextarea.style.borderColor = redColor;
            }
    
   } 
    
    
    
    
    






    
});

// blog page start
document.getElementById("blog-page").addEventListener("click", function(){
  window.location.href = './blog.html';

})
// blog page end

// const accountBalance = getTextFieldValueById("account-balance");

// donate now btn 01 start
const donateButton01 = document.getElementById("donate-now-btn-01");
donateButton01.addEventListener("click", function(){
  const inputAmount01 =  getInputFieldValueById("input-amount-01");
  const accountBalance = getTextFieldValueById("account-balance");

   if(isNaN(inputAmount01) || inputAmount01 <= 0 || inputAmount01 > accountBalance){

    alert("Invalid Donation Amount");
    
   }else{
    // showModal
    const modal = document.getElementById("my_modal_1");
    modal.showModal();

    // subtracting account balance
    const remainingBalance01 = accountBalance - inputAmount01;
    document.getElementById("account-balance").innerText = remainingBalance01;

    // added donation balance
    const donationBalance = getTextFieldValueById("donation-balance-01");
    const newDonationBalance = donationBalance + inputAmount01;
    document.getElementById("donation-balance-01").innerText = newDonationBalance;

  //  added to donation history
     const title01 = document.getElementById("title-01").innerText;
     addToHistory(inputAmount01, title01);

   }

})
// donate now btn 01 end

// donate now btn 02 start
const donateButton02 = document.getElementById("donate-now-btn-02");
donateButton02.addEventListener("click", function(){
  const inputAmount02 =  getInputFieldValueById("input-amount-02");
 const accountBalance = getTextFieldValueById("account-balance");

   if(isNaN(inputAmount02) || inputAmount02 <= 0 || inputAmount02 > accountBalance){

    alert("Invalid Donation Amount");
    //  return ;
   }else{
    // showModal
    const modal = document.getElementById("my_modal_2");
    modal.showModal();

    // subtracting account balance
    const remainingBalance02 = accountBalance - inputAmount02;
    document.getElementById("account-balance").innerText = remainingBalance02;

    // added donation balance
    const donationBalance = getTextFieldValueById("donation-balance-02");
    const newDonationBalance = donationBalance + inputAmount02;
    document.getElementById("donation-balance-02").innerText = newDonationBalance;

  //  added to donation history
     const title02 = document.getElementById("title-02").innerText;
     addToHistory(inputAmount02, title02);
   }
})
// donate now btn 02 end


// donate now btn 03 start
const donateButton03 = document.getElementById("donate-now-btn-03");
donateButton03.addEventListener("click", function(){
  const inputAmount03 =  getInputFieldValueById("input-amount-03");
  const accountBalance = getTextFieldValueById("account-balance");

   if(isNaN(inputAmount03) || inputAmount03 <= 0 || inputAmount03 > accountBalance){

    alert("Invalid Donation Amount");
    //  return ;
   }else{
    // showModal
    const modal = document.getElementById("my_modal_3");
    modal.showModal();

    // subtracting account balance
    const remainingBalance03 = accountBalance - inputAmount03;
    document.getElementById("account-balance").innerText = remainingBalance03;

    // added donation balance
    const donationBalance = getTextFieldValueById("donation-balance-03");
    const newDonationBalance = donationBalance + inputAmount03;
    document.getElementById("donation-balance-03").innerText = newDonationBalance;

  //  added to donation history
     const title03 = document.getElementById("title-03").innerText;
     addToHistory(inputAmount03, title03);
   }
})
// donate now btn 03 end




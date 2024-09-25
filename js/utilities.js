 /**
  * common shared functions here
  */
 function getInputFieldValueById(id){
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);

  return inputNumber;
 }

 function getTextFieldValueById(id){
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);

  return textNumber;

 }

//  show section
 function showSectionById(id){
  document.getElementById('donation-container').classList.add('hidden');
  document.getElementById('history-container').classList.add('hidden');

  document.getElementById(id).classList.remove('hidden');

 }

//  add to history
 function addToHistory(inputAmount, title) {
  const historyItem = document.createElement("div");
  historyItem.className =
    "p-3 space-y-4 border border-gray-400 pb-10 rounded-lg";

  historyItem.innerHTML = `
        <p class="text-base ">${inputAmount} Taka is Donated for ${title}</p>
        <p class="text-sm bg-slate-50 rounded-lg p-3">${new Date().toLocaleString()}</p>
        
    `;
  const historyContainer = document.getElementById("history-container");

  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
}
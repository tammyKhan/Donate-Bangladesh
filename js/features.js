const historyTab = document.getElementById("history-tab");
const donationTab = document.getElementById("donation-tab");

document.getElementById('donation-tab').addEventListener('click', function(){
  showSectionById('donation-container');

  donationTab.classList.add(
    "btn",
    "bg-lime-300",
     "text-lg",
     "font-bold",
     'w-32',
     'rounded-lg'
  );

  donationTab.classList.remove(
    'btn',
     'px-6',
    'text-gray-500',
    'bg-white',
    'border-gray-400',
    'font-semibold',
     'text-lg'
  );
  historyTab.classList.remove(
    "btn",
    "bg-lime-300",
     "text-lg",
     "font-bold",
     'w-32',
     'rounded-lg'
  );
  historyTab.classList.add(
    'btn',
    'px-6',
   'text-gray-500',
   'bg-white',
   'border-gray-400',
   'font-semibold',
    'text-lg'

  );
})

document.getElementById('history-tab').addEventListener('click', function(){
  showSectionById('history-container');

  historyTab.classList.add(
    "btn",
    "bg-lime-300",
     "text-lg",
     "font-bold",
     'w-32',
     'rounded-lg'
  );

  historyTab.classList.remove(
    'btn',
     'px-6',
    'text-gray-500',
    'bg-white',
    'border-gray-400',
    'font-semibold',
     'text-lg'
  );
  donationTab.classList.remove(
    "btn",
    "bg-lime-300",
     "text-lg",
     "font-bold",
     'w-32',
     'rounded-lg'
  );
  donationTab.classList.add(
    'btn',
    'px-6',
   'text-gray-500',
   'bg-white',
   'border-gray-400',
   'font-semibold',
    'text-lg'
  );
})




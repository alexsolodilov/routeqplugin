 document.getElementById("logs2").addEventListener("click", async () => {
  
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
chrome.scripting.executeScript({
  
    target: { tabId: tab.id },
    
    function: gotoMVRP,
  });
});
   //let [tab2] = await chrome.tabs.query({ url : "https://forms.yandex-team.ru/surveys/50237*" });
//console.log(tab2)

 //chrome.scripting.executeScript({
  //target: { tabId: tab2.id },
  // function: clickButton,
   // });
//});

// запускаем снег
function gotoMVRP() {
let URL=window.location.href;
if (URL.includes("calendar")) {
  // Код, который выполнится, если URL содержит "calendar"
  let start=URL.search("solution/")+9;
  let finish=start+35;
  let solutionID=URL.slice(start,finish);
  console.log(solutionID);


let newUrl=`https://yandex.ru/courier/mvrp-map/#calendar/${solutionID}`
window.open(newUrl, '_blank').focus(); 
} else {
  // Код, который выполнится, если URL НЕ содержит "calendar"
  let start=URL.search("mvrp/")+5;
  let finish=start+35;
  let solutionID=URL.slice(start,finish);
  console.log(solutionID);


let newUrl=`https://yandex.ru/courier/mvrp-map?win=529#${solutionID}`
window.open(newUrl, '_blank').focus(); 

}


};

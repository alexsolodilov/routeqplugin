 document.getElementById("logs4").addEventListener("click", async () => {
  
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
chrome.scripting.executeScript({
  
    target: { tabId: tab.id },
    
    function: gotoRequest,
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
function gotoRequest() {
let URL=window.location.href;
if (URL.includes("solution")) {
  let start=URL.search("solution/")+9;
  let finish=start+35;
  let solutionID=URL.slice(start,finish);
console.log(solutionID);
let newUrl=`https://courier.yandex.ru/vrs/api/v1/log/request/${solutionID}`
window.open(newUrl, '_blank').focus(); 

}
else if (URL.includes("mvrp-map/#calendar") || URL.includes("mvrp-map?win=525#calendar/")) {
  let start=URL.search("calendar/")+9;
  let finish=start+35;
  let solutionID=URL.slice(start,finish);
console.log(solutionID);
let newUrl=`https://courier.yandex.ru/vrs/api/v1/log/request/${solutionID}`
window.open(newUrl, '_blank').focus(); 
} else if (URL.includes("mvrp/")) {
  let start=URL.search("mvrp/")+5;
  let finish=start+35;
  let solutionID=URL.slice(start,finish);
  console.log(solutionID);
  let newUrl=`https://courier.yandex.ru/vrs/api/v1/log/request/${solutionID}`
window.open(newUrl, '_blank').focus(); 
}
else {
  let start=URL.search("#")+1;
  let finish=start+35;
  let solutionID=URL.slice(start,finish);
  console.log(solutionID);
  let newUrl=`https://courier.yandex.ru/vrs/api/v1/log/request/${solutionID}`
window.open(newUrl, '_blank').focus(); 
}

};

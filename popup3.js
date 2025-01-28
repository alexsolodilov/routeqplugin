 document.getElementById("logs3").addEventListener("click", async () => {
  
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
chrome.scripting.executeScript({
  
    target: { tabId: tab.id },
    
    function: gotoRML,
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
function gotoRML() {
let URL=window.location.href;
if (URL.includes("calendar")) {
  let start=URL.search("#")+10;
  let finish=start+35;
  let solutionID=URL.slice(start,finish);
  
  
  console.log(solutionID);
  
  
  let newUrl=`https://yandex.ru/courier/companies/6/calendar-planning/depots/all/planning/solution/${solutionID}`
  window.open(newUrl, '_blank').focus(); 

} else {
let start=URL.search("#")+1;
let finish=start+35;
let solutionID=URL.slice(start,finish);


console.log(solutionID);


let newUrl=`https://yandex.ru/courier/companies/6/depots/all/mvrp/${solutionID}`
window.open(newUrl, '_blank').focus(); 
}
};

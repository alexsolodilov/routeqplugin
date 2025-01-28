// получаем доступ к кнопке
let snow = document.getElementById("logs");
// когда кнопка нажата — находим активную вкладку и запускаем нужную функцию
snow.addEventListener("click", async () => {
  // получаем доступ к активной вкладке
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  // выполняем скрипт
  chrome.scripting.executeScript({
    // скрипт будет выполняться во вкладке, которую нашли на предыдущем этапе
    target: { tabId: tab.id },
    
    function: getLogs,
  });


   //let [tab2] = await chrome.tabs.query({ url : "https://forms.yandex-team.ru/surveys/50237*" });
//console.log(tab2)

 //chrome.scripting.executeScript({
  //target: { tabId: tab2.id },
  // function: clickButton,
   // });
});

// запускаем снег
function getLogs() {
let URL=window.location.href;
let finish1=URL.search("depots")-1;
let companyID=URL.slice(36,finish1);
let start2=URL.search("routes")+7;
let finish2=URL.search("date")-1;
let routeID=URL.slice(start2,finish2);

console.log(companyID);
console.log(routeID);
  let elements = document.querySelectorAll(".courier-map__label");
  let elementsValues = document.querySelectorAll(".courier-map__value");
  var timeStart;

for (let i = 0; i < elements.length; i++) {
  if (elements[i].textContent=="Установленное время старта") {
    timeStart = elementsValues[i].textContent 
  }
}
let timeStartClear=timeStart.slice(1,5)+`:00`;
console.log(timeStart);
console.log(timeStartClear);

let newUrl=`https://forms.yandex-team.ru/surveys/107932/?answer_short_text_376520=${companyID}&answer_short_text_1029607=${routeID}&answer_short_text_1029608=${timeStartClear}`;
window.open(newUrl, '_blank').focus(); 

};

//function clickButton(){
  //let elems= document.querySelectorAll("modal-footer-button__title");
 //console.log(elems);
 //elems.click();
//};


 document.getElementById("logs8").addEventListener("click", async () => {
  
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
chrome.scripting.executeScript({
  
    target: { tabId: tab.id },
    
    function: gotoShared,
  });
});
 
function gotoShared() {
let originalUrl=window.location.href;
const match = originalUrl.match(/(shared-[a-f0-9\-]+)/);

  // Проверяем, найден ли идентификатор
  if (match && match[1]) {
    const sharedId = match[1];
    // Формируем новый URL, подставляя идентификатор
    const newUrl = `https://courier.yandex.ru/vrs/api/v1/calendar_planning/tasks/${sharedId}/result`;
    window.open(newUrl, '_blank').focus(); 
  } else {
    // В случае, если идентификатор не найден, возвращаем пустую строку или сообщение об ошибке
    return "Идентификатор не найден";
  }
};

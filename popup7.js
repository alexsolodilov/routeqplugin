 document.getElementById("logs7").addEventListener("click", async () => {
  
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
chrome.scripting.executeScript({
  
    target: { tabId: tab.id },
    
    function: gotoAnalyze,
  });
});




function gotoAnalyze() {
  let originalUrl=window.location.href;
  const companyIdMatch = originalUrl.match(/companies\/(\d+)/);
  const courierIdMatch = originalUrl.match(/couriers\/(\d+)/);
  const routeIdMatch = originalUrl.match(/routes\/(\d+)/);

  const companyId = companyIdMatch ? companyIdMatch[1] : '';
  const courierId = courierIdMatch ? courierIdMatch[1] : '';
  const routeId = routeIdMatch ? routeIdMatch[1] : '';

  const newUrlBase = "http://rqs-vm-utils.vla.yp-c.yandex.net/Анализатор_треков";
  const newUrlParams = `?company_id=${companyId}&route_id=${routeId}&courier_id=${courierId}`;
  newUrl = newUrlBase + newUrlParams;
window.open(newUrl, '_blank').focus(); 
};

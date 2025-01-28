document.getElementById("logs7").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: gotoAnalyze,
  });
});

// Функция для существующей кнопки
function gotoAnalyze() {
  let originalUrl = window.location.href;
  const companyIdMatch = originalUrl.match(/companies\/(\d+)/);
  const courierIdMatch = originalUrl.match(/couriers\/(\d+)/);
  const routeIdMatch = originalUrl.match(/routes\/(\d+)/);

  const companyId = companyIdMatch ? companyIdMatch[1] : '';
  const courierId = courierIdMatch ? courierIdMatch[1] : '';
  const routeId = routeIdMatch ? routeIdMatch[1] : '';

  const newUrlBase = "http://rqs-vm-utils.vla.yp-c.yandex.net/Анализатор_треков";
  const newUrlParams = `?company_id=${companyId}&route_id=${routeId}&courier_id=${courierId}`;
  const newUrl = newUrlBase + newUrlParams;
  window.open(newUrl, '_blank').focus(); 
}

// Обработчик для новой кнопки analyzeCompare
document.getElementById("analyzeCompare").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: gotoAnalyzeCompare,
  });
});

// Функция для новой кнопки
function gotoAnalyzeCompare() {
  const originalUrl = window.location.href;

  // Извлечение параметра id1 из URL
  const id1Match = originalUrl.match(/mvrp\/([^\/?]+)/);
  const id1 = id1Match ? id1Match[1] : '';

  // Извлечение параметра id2 из DOM
  const exportModal = document.querySelector('.export-modal');
  let id2 = '';
  if (exportModal) {
    const input = exportModal.querySelector('.bb-ui-text-field__control');
    if (input && input.value) {
      const id2Match = input.value.match(/mvrp\/([^"]+)/);
      id2 = id2Match ? id2Match[1] : '';
    }
  }

  // Проверка, что оба параметра найдены
  if (id1 && id2) {
    const newUrlBase = "http://rqs-vm-utils.vla.yp-c.yandex.net/Анализ_и_сравнение_решений";
    const newUrlParams = `?id1=${encodeURIComponent(id1)}&id2=${encodeURIComponent(id2)}`;
    const newUrl = `${newUrlBase}${newUrlParams}`;
    window.open(newUrl, '_blank').focus();
  } else {
    alert("Не удалось извлечь необходимые параметры.");
  }
}

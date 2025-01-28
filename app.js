
document.addEventListener('keydown', ({ shiftKey, code }) => {
    
    let URL=window.location.href;
    if (shiftKey && code === 'KeyR') {
        if (URL.includes("solution")) {
            let start=URL.search("solution/")+9;
            let finish=start+35;
            let solutionID=URL.slice(start,finish);
          console.log(solutionID);
          let newUrl=`https://courier.yandex.ru/vrs/api/v1/log/request/${solutionID}`
          window.open(newUrl, '_blank').focus(); 
          
          }
          else if (URL.includes("mvrp-map/#calendar") || URL.includes("mvrp-map?win=525#calendar/") || URL.includes("mvrp-map?win=529#calendar/")) {
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
          else if (URL.includes("mvrp-map")){
            let start=URL.search("#")+1;
            let finish=start+35;
            let solutionID=URL.slice(start,finish);
            console.log(solutionID);
            let newUrl=`https://courier.yandex.ru/vrs/api/v1/log/request/${solutionID}`
          window.open(newUrl, '_blank').focus(); 
          }


        
    };
});

//rejistrating sw
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
    .then(function(registration) {
      console.log('Registration successful, scope is:', registration.scope);
    })
    .catch(function(error) {
      console.log('Service worker registration failed, error:', error);
    });
  }
  

  const fetchData = () => {
      console.log('fetchData runnning');
      fetch('https://api.github.com/users/zeeshanhanif/followers').then((res)=>{
        return (res.json()).then((data)=>{
            console.log('from on click');
            console.log(data);
        })
      });

      //checking in cache
      if ('caches' in window) {
        console.log('caches avaliable in window');
        caches.match('https://api.github.com/users/zeeshanhanif/followers').then(function(response) {
          if (response) {
            response.json().then(function (json) {
              console.log('from cache');
              console.log(json);
            });
          }
        });
      }


  }

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv
  //


  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbvhjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv


  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbvhjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv


  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbvhjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv


  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbvhjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv


  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbvhjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv


  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbvhjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv


  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbvhjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv


  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbvhjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv


  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbvhjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv


  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbvhjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv


  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbvhjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv


  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbvhjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv


  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbvhjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv


  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbvhjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv


  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  //jsjsjshjjdhsjdsndbsab chcb bscns hsc nsc s cs cs cbd cd bd cb dbv bv fbv fbv f fv fbv

  


const fetcher = () => {
        console.log('get func running');
        fetch('https://api.github.com/users/zeeshanhanif/followers').then(function(response) {
                return (response.json()).then(function(data) {
                    console.log(data)
                })
        })
        .catch(function(err) {
                console.log(err);
        })

        //checking for data in cache
        caches.match('https://api.github.com/users/zeeshanhanif/followers').then(
               function(response) {
                 // if responce returns empty
                if(!response) {
                        console.log('NO DYNAMIC DATA IN CACHE');
                        console.log(response);
                }
                return response.json()
               } 
        ).then(function(data) {
                console.log('from cache')
                console.log(data + 'from cache')
        }).catch(function(err) {
                console.log(err + 'from cache')
        })
    }



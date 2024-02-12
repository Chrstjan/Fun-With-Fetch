//Her Fetcher den efter alle racer listen
fetch('https://dog.ceo/api/breeds/list/all')
//Her converter den dataen til .json format
.then(response => response.json())
//Her console.logger den dataen der er converted til json i arrays
.then(json => console.log(json))

//Her fetcher den efter et random billed fra alle racer
fetch('https://dog.ceo/api/breeds/image/random')
//Her converter den dataen til .json format
.then(response => response.json())
//Her console.logger den dataen der er converted til json i arrays
.then(json => console.log(json))

//Her fetcher den efter alle billeder fra en bestems race
fetch('https://dog.ceo/api/breed/hound/images')
//Her converter den dataen til .json format
.then(response => response.json())
//Her console.logger den dataen der er converted til json i arrays
.then(json => console.log(json))

//Her fetcher den efter all "sub-races" fra en bestems hunde race
fetch('https://dog.ceo/api/breed/hound/list')
//Her converter den dataen til .json format
.then(response => response.json())
//Her console.logger den dataen der er converted til json i arrays
.then(json => console.log(json))

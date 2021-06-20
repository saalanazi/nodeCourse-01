const request = require('request')

const url = 'https://api.darksky.net/forecast/b21e7b42bf10f40e85029a593d8b3604/23.8859,23.8859'

request({url: url, json: true}, (err, response) => {
    if(err){
        console.log('Unable to connect to location services.')
    }else if(response.body.err){
        console.log('Unable to find location. Try another search')
    }else{
        console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature}
    degrees out. There is ${response.body.currently.precipProbability} % chane of rain.`)
    }
    
    // const data = JSON.parse(response.body)
    // console.log(data.currently.temperature)
})
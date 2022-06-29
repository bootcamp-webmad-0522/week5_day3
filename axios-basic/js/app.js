document.querySelector('input').onkeyup = event => {

    const countryName = event.currentTarget.value

    axios
        .get(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(response => {

            const { capital, region, population } = response.data[0]

            const text = `El país ${countryName} pertenece a ${region}, tiene una población de ${population} habitantes y su capital principal es ${capital[0]}`

            document.querySelector('#result').innerHTML = text
        })
        .catch(err => {
            document.querySelector('#result').innerHTML = `El país ${countryName} no existe, merluzo`
        })
}
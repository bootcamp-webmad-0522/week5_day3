document.querySelector('button').onclick = () => {

    fetch('https://coasters-api.herokuapp.com/')
        .then(response => response.json())
        .then(coasters => {
            let text = ''
            coasters.forEach(elm => text += `<li>${elm.name}</li>`)
            document.querySelector('#coastersList').innerHTML = text
        })
        .catch(err => console.log(err))
}
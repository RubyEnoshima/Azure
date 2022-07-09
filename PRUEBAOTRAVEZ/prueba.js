function boton() {
    fetch('https://funcions.azurewebsites.net/api/PruebaTrigger?' + new URLSearchParams({
            code: '0BMisn1DzyHlyUbMjNq4d3lCyjESUELY1ssuQcyLkahvAzFuz-o8qg==',
            name: 'a'
        }), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'https://azurecloud04.azurewebsites.net/',
                'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
            },
            // body: JSON.stringify({
            //     code: '0BMisn1DzyHlyUbMjNq4d3lCyjESUELY1ssuQcyLkahvAzFuz-o8qg==',
            //     name: 'a'
            // }),
        }).then((response) => {
            console.log(response)
        }).then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.log(error)
        })
}
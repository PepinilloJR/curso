
async function Cliente() {
    const response = await fetch('http://localhost:4000/post', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({BOLAS:"BOLITAS", EDAD:"piquicucu"})
    })

    console.log(await response.json())
}

Cliente()

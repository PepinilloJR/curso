fetch('http://localhost:4000/post', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({BOLAS:"BOLITAS", EDAD:"piquicucu"})
})
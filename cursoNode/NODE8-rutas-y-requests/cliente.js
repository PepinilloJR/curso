async function Rodrigo() {
    await fetch("http://localhost:1234/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            },
        body: JSON.stringify({numero_aula: 23, edificio_id: 1, capacidad: "muchos"})})
}

Rodrigo()
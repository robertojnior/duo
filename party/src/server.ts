import express from 'express'

const app = express()

app.get('/games', (request, response) => {
  return response.status(200).json([
    { id: 1, name: 'League of Legends' },
    { id: 2, name: 'Apex Legends' },
    { id: 3, name: 'Counter Strike' },
    { id: 4, name: 'World of Warcraft' },
    { id: 5, name: 'Dota 2' },
    { id: 6, name: 'Fortnite' }
  ])
})

app.listen(3000)

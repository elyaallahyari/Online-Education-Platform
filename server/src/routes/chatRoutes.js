const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const { message } = req.body

    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.1',
        prompt: message,
        stream: false
      })
    })

    const data = await response.json()
    res.json({ reply: data.response })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'خطا در ارتباط با Ollama' })
  }
})

module.exports = router

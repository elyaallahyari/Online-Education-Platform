import React, { useState } from 'react'
import { AiFillWechat } from 'react-icons/ai'
import '../assets/styles/Chatbot.css'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const toggleChat = () => setIsOpen(!isOpen)

  const sendMessage = async () => {
    if (!input.trim()) return

    const newMessage = { sender: 'user', text: input }
    setMessages((prev) => [...prev, newMessage])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('http://localhost:4000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      })

      const data = await res.json()
      const botMessage = { sender: 'bot', text: data.reply }

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error('خطا در ارسال پیام:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <button className="chatbot-toggle" onClick={toggleChat}>
          <AiFillWechat />
        </button>
      )}

      {isOpen && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <h3>Chatbot</h3>
            <button onClick={toggleChat}>✖</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.sender === 'user' ? 'user' : 'bot'}`}>
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="chat-message bot typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              placeholder="Ask anything.."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Chatbot

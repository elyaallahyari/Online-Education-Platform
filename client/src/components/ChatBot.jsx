// import React, { useState } from 'react'
// import './chatbot.css'

// const ChatBot = () => {
//   const [messages, setMessages] = useState([
//     { sender: 'bot', text: 'سلام! چطور می‌تونم کمکت کنم؟' }
//   ])
//   const [input, setInput] = useState('')
//   const [isTyping, setIsTyping] = useState(false)

//   const sendMessage = async () => {
//     if (!input.trim()) return

//     const newMsg = { sender: 'user', text: input }
//     setMessages([...messages, newMsg])
//     setInput('')
//     setIsTyping(true)

//     try {
//       const res = await fetch('http://localhost:5000/api/chat', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message: input })
//       })
//       const data = await res.json()

//       setMessages((prev) => [...prev, { sender: 'bot', text: data.reply }])
//     } catch {
//       setMessages((prev) => [...prev, { sender: 'bot', text: 'خطا در ارتباط با سرور!' }])
//     }
//     setIsTyping(false)
//   }

//   return (
//     <div className="chatbot">
//       <div className="chat-window">
//         {messages.map((msg, i) => (
//           <div key={i} className={`msg ${msg.sender}`}>
//             {msg.text}
//           </div>
//         ))}
//         {isTyping && <div className="msg bot">در حال تایپ...</div>}
//       </div>
//       <div className="chat-input">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="پیام خود را بنویسید..."
//         />
//         <button onClick={sendMessage}>ارسال</button>
//       </div>
//     </div>
//   )
// }

// export default ChatBot

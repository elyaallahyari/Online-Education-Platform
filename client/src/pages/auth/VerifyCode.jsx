import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import '../../assets/styles/VerifyCode.css'

const VerifyCode = () => {
  const [inputCode, setInputCode] = useState('')
  const [timer, setTimer] = useState(60)
  const [expired, setExpired] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000)
      return () => clearTimeout(countdown)
    } else {
      setExpired(true)
    }
  }, [timer])

  const handleVerify = (e) => {
    e.preventDefault()
    const savedCode = localStorage.getItem('verificationCode')

    if (expired) {
      toast.info('⏳ زمان کد تموم شده! دوباره کد بگیر.')
      return
    }

    if (inputCode === savedCode) {
      toast.success('تایید شد!')
      localStorage.setItem('verified', true)
      navigate('/login')
    } else {
      toast.error('کد اشتباهه')
    }
  }

  const handleResend = () => {
    const newCode = Math.floor(1000 + Math.random() * 9000)
    localStorage.setItem('verificationCode', newCode)
    toast.info(`🔄 کد جدید: ${newCode}`)
    setTimer(60)
    setExpired(false)
  }

  return (
    <div className="verify-container">
      <div className="verify-card">
        <h2 className="verify-title">تایید شماره</h2>
        <p className="verify-subtitle">کد ارسال‌شده به شماره‌ات را وارد کن</p>

        <form onSubmit={handleVerify} className="verify-form">
          <input
            type="text"
            className="verify-input"
            placeholder="کد ۴ رقمی"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
          />

          <button type="submit" className="verify-btn">
            تایید
          </button>
        </form>

        <div className="verify-timer">
          {expired ? (
            <button onClick={handleResend} className="resend-btn">
              ارسال مجدد کد
            </button>
          ) : (
            <span>زمان باقی‌مانده: {timer} ثانیه</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default VerifyCode

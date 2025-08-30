import React from 'react'
import Navbar from './Navbar'
const About = () => {
  return (
    <>
      <Navbar />
      <div className='container py-5'>

        {/* section1 - info */}
        <div className='text-center mb-5' >
          <h2 style={{ fontFamily: "cursive" }} >About Us</h2>

          <p className="mt-4">Welcome to <b>Hi Notes</b> – your personal space to capture ideas, thoughts, and reminders, anytime, anywhere.</p>

          <p> We believe that great ideas shouldn’t be lost. That’s why we created Hi Notes – a simple, secure, and user-friendly app designed to make note-taking effortless. Whether it’s your daily to-do list, important study notes, or random creative sparks, Hi Notes helps you organize everything in one place.</p>

          <p> Our goal is to make note-taking fast, reliable, and accessible, so you can focus on what truly matters – your thoughts. With features like quick search, easy organization, and a clean interface, Hi Notes is built for students, professionals, and anyone who loves to stay organized.</p>

          <p> At Hi Notes, we value simplicity, privacy, and productivity. Your notes are yours – always safe, always accessible.</p>

          <p> Let’s make note-taking smarter, together. </p>

          {/* Emojis line */}
          <div className="text-center mt-5 pt-3">
            <span style={{ fontSize: "1.5rem" }}>
              ❤️ 📌 📝 💛 ✎𓂃 💜 ♫ 💙 📒 💛 🌍 ✍🏻 📕 💡 💚 
            </span>
          </div>
        </div>
      </div>

    </>
  )
}
export default About
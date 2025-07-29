import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase is clicked " + text)
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to upercase!","success");

  }

  const handleLoClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to lowercase!","success");

  }

  const handleOnChange = (event) => {
    setText(event.target.value)
    
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    props.showAlert("Text is copied!","success");

  }

  const handleClear = () => {
    setText('')
    props.showAlert("Text is cleared","warning");

  }

  const [isSpeaking, setIsSpeaking] = useState(false)

  const handleTextToSpeechClick = () => {
  if ('speechSynthesis' in window) {
    if (isSpeaking) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
    } else {
      const message = new SpeechSynthesisUtterance(text)
      message.lang = 'en-US'
      message.rate = 1
      message.pitch = 1
      message.onend = () => setIsSpeaking(false)  // Reset when done
      window.speechSynthesis.speak(message)
      setIsSpeaking(true)
    }
  } else {
    alert("Sorry, your browser does not support text-to-speech.")
  }
  props.showAlert("Text is converted to speech ","success");

}
  const [text, setText] = useState("")

  return (
    <>
      <div className="container my-4 p-4 bg-light rounded shadow">
        <h1 className="mb-4 text-primary">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control border-primary"
            id="mybox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter your text here"
          ></textarea>

          <div className="d-flex flex-wrap mt-3">
            <button className="btn btn-outline-primary me-2 mb-2" onClick={handleUpClick}>
              Convert to Uppercase
            </button>
            <button className="btn btn-outline-primary me-2 mb-2" onClick={handleLoClick}>
              Convert to Lowercase
            </button>
            <button className="btn btn-outline-danger me-2 mb-2" onClick={handleClear}>
              Clear Text
            </button>
            <button className="btn btn-outline-success me-2 mb-2" onClick={handleTextToSpeechClick}>
              Convert to Speech
            </button>
          </div>
        </div>
      </div>

      <div className="container my-4 p-4 bg-white rounded border shadow-sm">
        <h2 className="text-secondary">Your Text Summary</h2>
        <p><strong>{text.trim().split(/\s+/).filter(Boolean).length}</strong> words, <strong>{text.length}</strong> characters</p>
        <p><em>{(0.008 * text.trim().split(/\s+/).filter(Boolean).length).toFixed(2)}</em> Minutes to read</p>
        <h3 className="mt-4">Preview</h3>
        <p className="border rounded p-3 bg-light">{text.length > 0 ? text : "Nothing to preview!"}</p>
        <button onClick={handleCopy} className="btn btn-secondary mt-3">
          Copy Preview
        </button>
      </div>
    </>
  )
}

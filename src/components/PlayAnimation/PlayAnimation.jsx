import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import "./playAnimation.scss"

const PlayAnimation = () => {
  const history = useHistory()

  // Use the specific YouTube video ID
  const videoId = "lpzEd8gpWVM"

  // Optional: Additional parameters from your URL
  const params = new URLSearchParams({
    source_ve_path: "MTc4NDI0"
  })

  // Construct the embed URL with parameters
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${videoId}&${params.toString()}`

  // Redirect after 4.2 seconds
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      history.push('/browse')
    }, 124200)
    return () => clearTimeout(timeoutId)
  }, [history])

  return (
    <div className='PlayAnimation__wrp'>
      <div>
        X
      </div>
      <div className="video-container">
        <iframe
          src={embedUrl}
          title="Rick Astley - Never Gonna Give You Up"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="full-screen-video"
        ></iframe>
      </div>
    </div>
  )
}

export default PlayAnimation


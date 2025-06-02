import '../assets/works.css'

function Works() {
  return (
    <div className="works-video-wrapper">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/preview.jpg"
        className="works-video"
      >
        <source src="/gallery-optimized/Mas_Garguier_(1080p).mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Works;
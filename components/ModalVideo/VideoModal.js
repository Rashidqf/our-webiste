
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'


const VideoModal = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="8oON21G1Bqg?si=Tt2a51CQKJyJk5CV" onClose={() => setOpen(false)} />
        <button className="video-btn" onClick={() => setOpen(true)}><i className="ti-control-play"></i></button>
    </React.Fragment>
  )
}

export default VideoModal;



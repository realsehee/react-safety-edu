import React, { useRef, useCallback } from "react";
import "./MovieModal.css";
import useOnClickOutside from "../../hooks/useOnClickOutside";

function MovieModal({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) {
  const ref = useRef();

  useOnClickOutside(ref, () => {
      setModalOpen(false);
  });

  return (
    <div className="presentation">
      <div className="wrapper-modal">
        <div className="modal" ref={ref}>
          <span onClick={() => setModalOpen(false)} className="modal-close">
            X
          </span>
          <div className="modal__content">
            <p className="modal__details">
              <span className="modal__user_perc">100% for you</span>{" "}
              {release_date ? release_date : first_air_date}
            </p>

            <h2 className="modal__title">
              암 전조 증상
              {/* {title ? title : name} */}
            </h2>
            <p className="modal__overview"> 평점: {vote_average}</p>
            <p className="modal__overview"> {overview}</p>
            <iframe
              style={{width:'100%',height:'100%'}}
              src="https://www.youtube.com/embed/n2WkSIXHyK0" 
              title="YouTube video player"
              frameborder="0" 
              allow=" autoplay; fullscreen" allowfullscreen
            className="row__poster">
          </iframe>

          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;

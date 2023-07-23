import React, { useState } from 'react';
import PortfolioItemModal from './PortfolioItemModal';
import youtube from '../../images/youtube.png';
import website from '../../images/website.png';
import nutritionship from '../../images/nutritionship.png';
import mealhub from '../../images/mealhub.png'
const PolaroidCard = ({
  angle,
  x,
  y,
  caption,
  longDescription,
  leveragedSoftware,
  frontEnd,
  backEnd,
  github,
  title,
  cta,
  classNameHeader
}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  let image;

  if (classNameHeader === "youtube") {
    image = youtube;
  }

  if (classNameHeader === "mealhub") {
    image = mealhub;
  }

  if (classNameHeader === "nutritionship") {
    image = nutritionship;
  }

  if (classNameHeader === "website") {
    image = website;
  }

  const cardStyle = {
    '--image': `url("${image}")`,
    '--angle': angle,
    '--x': x,
    '--y': y,
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="polaroid-card" style={cardStyle} onClick={openModal}>
        <div className="polaroid-caption">
          <p>{caption}</p>
          < PortfolioItemModal
            title={title}
            shortDescription={caption}
            longDescription={longDescription}
            frontEnd={frontEnd}
            backEnd={backEnd}
            leveragedSoftware={leveragedSoftware}
            github={github}
            cta={cta}
            onClose={closeModal}
            isModalOpen={isModalOpen}
          />
        </div>


      </div>
    </>
  );
};

export default PolaroidCard;

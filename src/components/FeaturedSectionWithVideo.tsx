import React, { FC } from "react";

const getIdFromYoutubeURL = (url: string): string => {
  const regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[1].length == 11 ? match[1] : "";
};

/*
optimization: autoplay w/ sound on when scrolled to that section using the actual youtube api and this
react wrapper: https://www.npmjs.com/package/react-youtube
 */
const buildYoutubeEmbed = (id: string): string =>
  `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&playlist=${id}&loop=1&rel=0&modestbranding&controls=0`;

const FullScreenYouTubeEmbed: FC<{ id: string }> = ({ id }) => (
  <div
    className="relative h-0"
    style={{ paddingBottom: "56.25%", paddingTop: "25px" }}
  >
    <iframe
      className="h-full w-full p-8 md:p-16 top-0 left-0 absolute"
      width="560"
      height="315"
      src={buildYoutubeEmbed(id)}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop; controls; modestbranding; rel;"
      allowFullScreen
    ></iframe>
  </div>
);

interface FeaturedSectionWithVideoProps {
  youTubeLink: string;
}

const FeaturedSectionWithVideo: FC<FeaturedSectionWithVideoProps> = ({
  youTubeLink,
}) => {
  let tubeId;
  if (youTubeLink) {
    tubeId = getIdFromYoutubeURL(youTubeLink);
  }
  return (
    <section>
      {tubeId && <FullScreenYouTubeEmbed id={tubeId} />}
    </section>
  );
};

export default FeaturedSectionWithVideo;

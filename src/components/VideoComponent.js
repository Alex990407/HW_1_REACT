function VideoComponent() {
  return (
    <video>
      <source
        src="https://www.w3schools.com/html/movie.mp4"
        type="video/mp4"
      ></source>
      <source src="movie.ogg" type="video/ogg"></source>
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoComponent;

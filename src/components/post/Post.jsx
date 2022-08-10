import "./post.scss";

function Post({ img }) {
  return (
    <div className="post">
      <img className="post__img" src={img} alt="" />
      <div className="post__info">
        <div className="post__cats">
          <span className="post__cat">Music</span>
          <span className="post__cat">Life</span>
        </div>
        <span className="post__title">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </span>
        <hr />
        <span className="post__date">1 hour ago</span>
      </div>
      <p className="post__descr">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
        officia nostrum voluptatum eveniet beatae quisquam temporibus
        voluptatibus magnam, minus culpa quidem sunt possimus eius provident
        adipisci. Odio esse corrupti accusantium. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Incidunt officia nostrum voluptatum
        eveniet beatae quisquam temporibus voluptatibus magnam, minus culpa
        quidem sunt possimus eius provident adipisci. Odio esse corrupti
        accusantium. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Incidunt officia nostrum voluptatum eveniet beatae quisquam temporibus
        voluptatibus magnam, minus culpa quidem sunt possimus eius provident
        adipisci. Odio esse corrupti accusantium. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Incidunt officia nostrum voluptatum
        eveniet beatae quisquam temporibus voluptatibus magnam, minus culpa
        quidem sunt possimus eius provident adipisci. Odio esse corrupti
        accusantium. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Incidunt officia nostrum voluptatum eveniet beatae quisquam temporibus
        voluptatibus magnam, minus culpa quidem sunt possimus eius provident
        adipisci. Odio esse corrupti accusantium.
      </p>
    </div>
  );
}

export default Post;

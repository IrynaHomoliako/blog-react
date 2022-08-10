import "./singlePost.scss";

function SinglePost() {
  return (
    <div className="single-post">
      <div className="single-post__wrapper">
        <img
          className="single-post__img"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="single post"
        />
        <h1 className="single-post__title">
          Lorem, ipsum dolor sit amet.
          <div className="single-post__edit">
            <i className="single-post__icon fa-solid fa-pen-to-square"></i>
            <i className="single-post__icon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="single-post__info">
          <span className="single-post__author">
            Author: <b>Iryna</b>
          </span>
          <span className="single-post__date">1 hour ago</span>
        </div>
        <p className="single-post__descr">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          ex similique libero sit magni! Dicta tempore at quasi odit, cumque
          voluptatibus, ab iste nemo dolores officia veniam fuga exercitationem
          aspernatur! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Praesentium ex similique libero sit magni! Dicta tempore at quasi
          odit, cumque voluptatibus, ab iste nemo dolores officia veniam fuga
          exercitationem aspernatur! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium ex similique libero sit magni! Dicta
          tempore at quasi odit, cumque voluptatibus, ab iste nemo dolores
          officia veniam fuga exercitationem aspernatur! Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Praesentium ex similique libero sit
          magni! Dicta tempore at quasi odit, cumque voluptatibus, ab iste nemo
          dolores officia veniam fuga exercitationem aspernatur!
        </p>
      </div>
    </div>
  );
}

export default SinglePost;

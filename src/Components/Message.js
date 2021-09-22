const Message = ({ message }) => {
  const user = JSON.parse(window.localStorage.getItem('user'));
  return <div
    className={
      "message-cc " +
      (message.username === user.username
        ? "sender-cc"
        : "receiver-cc")
    }
  >
    <img
      className="profile-pic"
      src={
        message.username === user.username
          ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.stock-free.org%2Fimages%2Fbaby-animal-photo-05032016-image-203.jpg&f=1&nofb=1"
          : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.zastavki.com%2Fpictures%2F1680x1050%2F2010%2FAnimals_Beasts_Small_squirrel_on_a_branch_021435_.jpg&f=1&nofb=1"
      }
      alt="profile pic"
      height="30px"
      width="30px"
    />
    <p
      className={
        "message-text " +
        (message.username === user.username
          ? "message-text-sender"
          : "message-text-receiver")
      }
    >
      {message.message}
    </p>
  </div>
};

export default Message;

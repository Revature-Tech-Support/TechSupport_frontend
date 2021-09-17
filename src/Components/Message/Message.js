const Message = ({ message }) => {
  return (
    <div className='message'>
      {/* <img src={message.user.photo} alt="avatar" /> */}
      {/* <p>{message.username}</p> */}
      <p>{message}</p>
    </div>
  );
};

export default Message;

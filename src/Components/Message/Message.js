const Message = ({ message }) => {
  const user = JSON.parse(window.localStorage.getItem('user'));
  return (
    <div className='col'>
      <li className={message.username === user.username ? 'sender' : 'receiver'}>
        <div className='msg'>
          {/* <p>{data.sender.username}</p> */}
          {/* <div className='msgText'> {data.data.text}</div> */}
          <p><span className='username'>{message.username}</span><br /><span>{message.message}</span></p>
        </div>
      </li>
    </div>
  );
};

export default Message;

import React from 'react';

const MemberEntry = (props) => {
  const handleClick = (event) => {
    
    let { handleFail, changeCurrentWorkSpace, workSpace } = this.props;
    handleFail();
    getWorkSpaceMessagesFromServer(workSpace.id);
    changeCurrentWorkSpace(workSpace.id, workSpace.name);
  }

  return (
    <h5 className="memberEntry-name memberEntry-hover" onClick={() => props.directMessage(props.user.username)}>{props.user.username === props.username ? `${props.user.username}  (you)` : props.user.username}</h5>
  );
};

export default MemberEntry;
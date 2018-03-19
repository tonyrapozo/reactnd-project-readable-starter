import React from 'react';

const Vote = (props) => {
    const { post } = props;
    return (
        <div className="vote">
            <i className="mdi mdi-thumb-up" onClick={props.onVoteUp}></i>
            <span>{props.voteScore}</span>
            <i className="mdi mdi-thumb-down" onClick={props.onVoteUp}></i>
        </div>
    );
};

export default Vote;
import React from 'react';
import styled from 'styled-components';

export const UserIconWithName = (props) => {
    const { image, name, isAdmin } = props;
    return (
        <SContainer>
            <SImg 
                src={image}
                alt={name}
                height={160}
                width={160}
            />
            <SName>{name}</SName>
            { isAdmin && <SEdit>編集</SEdit> }
        </SContainer>
    )
};

const SContainer = styled.div`
    text-align: center;
`;

const SImg = styled.img`
    border-radius: 50%;
`;

const SName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #40514e;
`;

const SEdit = styled.span`
    text-decoration: underline;
    color: #aaa;
    cursor: pointer;
`;
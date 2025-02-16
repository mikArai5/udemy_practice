import React from 'react';
import { Card } from '../../atoms/card/Card';
import styled from 'styled-components';
import { UserIconWithName } from './UserIconWithName';

export const UserCard = (props) => {
    const { user, isAdmin } = props;
    return (
        <Card>
            <UserIconWithName image={user.image} name={user.name} isAdmin={isAdmin}/>
            <SDl>
                <dt>メール</dt>
                <dd>{user.email}</dd>
                <dt>TEL</dt>
                <dd>{user.phone}</dd>
                <dt>会社名</dt>
                <dd>{user.company.name}</dd>
                <dt>サイト</dt>
                <dd>{user.website}</dd>
            </SDl>
        </Card>
    )
};

const SDl = styled.dl`
    text-align: left;
    margin-bottom: 0;
    dt {
        float: left;
    }
    dd {
        padding-left: 32px;
        padding-bottom: 8px;
        overflow-wrap: break-word;
    }
`;
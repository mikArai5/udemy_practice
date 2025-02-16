import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organism/user/UserCard"
;
const users = [...Array(10).keys()].map(((val) => {
    return {
        id: val,
        name: `mika-${val}`,
        image: "./images/leo.jpg",
        email: "mail@address.com",
        phone: "000-1234-5678",
        company: {
            name: "株式会社ーーー"
        },
        website: "https://google.com"
    }
}));

export const Users = () => {
    const { state } = useLocation();
    const isAdmin = state ? state.isAdmin : false;
    return (
        <SContainer>
            <h2>ユーザー一覧</h2>
            <SearchInput />
            <SUserArea>
                {users.map((obj) => (
                    <UserCard key={obj.id} user={obj} isAdmin={isAdmin} />
                ))}
            </SUserArea>
        </SContainer>
    )
};

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`;

const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`;
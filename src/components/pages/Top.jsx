import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton"
// import { useNavigate } from "react-router-dom";

export const Top = () => {
    // const navigate = useNavigate();
    // const onClickAdmin = () => {
    //     navigate( "/users", { state: { isAdmin: true } })
    // };
    // const onClickGeneral = () => {
    //     navigate( "users", { state: { isAdmin: false } })
    // };

    const onClickAdmin = () => alert("管理");
    const onClickGeneral = () => alert("一般");

    return (
        <SContainer>
            <h2>TOPページです</h2>
            <SecondaryButton onClick={onClickAdmin}>管理ユーザー</SecondaryButton>
            <br/>
            <br />
            <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
        </SContainer>
    )
};

const SContainer = styled.div`
    text-align: center;
`;
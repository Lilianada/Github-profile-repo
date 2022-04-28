import styled from 'styled-components';

export const FooterSection = styled.footer`
    padding: 0 1rem 1rem;
    color: var(--white-color);
`
export const FooterBottom = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1rem 0;
    border-top: 1px solid #40516b;
`

export const Copyright = styled.div`
    padding-top: 1rem; 

    > p{
        color: #8f8e8e;
        font-size: 12px;
    }
`

export const FooterSocial = styled.div`
    margin-left: 1rem;
    width: 2rem;
    border-radius: 50%;
    border: solid 2px var(--white-color);
    padding: 8px;
    display: grid;
    place-items: center;
    cursor: pointer;

    &:hover{
        color: var(--blue-color);
        border-color: var(--blue-color);
    }
`

export const FooterLinks = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
`
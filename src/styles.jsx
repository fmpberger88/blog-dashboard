import styled from '@emotion/styled'

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    margin: 4rem;
    padding: 2rem;
    background-color: #213547;
    min-height: 60vh;
    border-radius: 10px;
    
    & h1 {
        color: white;
        font-size: 2.5rem;
        margin-top: 2rem;
    }
    
    & p {
        color: white;
        font-size: 1.25rem;
    }
    
    & input {
        width: 40%;
        padding: 0.5rem;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
    }
    
    & button {
        background-color: #A7B8C7;
        color: #213547;
        font-weight: bold;
        font-size: 1.25rem;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 10px;
    }
    
    @media screen and (max-width: 800px) {
        margin: 4rem auto;
        
        & input {
            width: 100%;
        }
    }
`

export const MainTitle = styled.h1`
    color: #213547;
    text-align: center;
    margin: 2rem;
`
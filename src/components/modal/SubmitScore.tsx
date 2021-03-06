import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
  


interface SubmitScoreProps {
    time: number;
    show: boolean;
    submitScore: (name: string) => Promise<void>;
}

interface StyledProps {
    show: boolean;
}

export const SubmitScore: React.FC<SubmitScoreProps> = ({ time, show, submitScore }) => {
    const [username, setUsername] = useState<string>('');
    
    return (
        <SubmitWrapper show={show}>
            <Overlay show={show}></Overlay>
            <ScoreWrapper show={show}>
                <p>Level Completion Time:</p>
                <Score>{time} sec</Score>
                <input type="text" placeholder='Name' value={username} onChange={(e) => {setUsername(e.target.value)}}/>
                <Buttons>
                    <button onClick={() => submitScore(username)}>Submit</button>
                    <CancelLink to='/'>Cancel</CancelLink>
                </Buttons>
            </ScoreWrapper>
        </SubmitWrapper>
    );
}

export default SubmitScore;

const SubmitWrapper = styled.div<StyledProps>`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    ${({show}) =>
        show &&
        css`
        z-index: 1;
        `
    }
    
`

const Overlay = styled.div<StyledProps>`
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: 150ms ease-in-out;

    ${({show}) =>
        show &&
        css`
        opacity: 100;
        `
    }
    
`

const ScoreWrapper = styled.div<StyledProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 30%;
    background-color: #FFF;
    padding-inline: 1em;
    padding-block: .5em;
    font-size: 2em;
    border-radius: 10px;

    & > input {
        font-size: .8em;
        apperance: none;
        border: none;
        background: hsl(0, 0%, 90%);
        width: 100%;
        font-family: inherit;
        padding-inline: .5em;
        padding-block: .2em;
        border-radius: 5px;

        &:focus {
            outline: 1px solid ${({theme}) => theme.color.mainBlue};
        }
    }

    transform: scale(0);
    transition: 150ms ease-in-out;

    ${({show}) => 
        show &&
        css`
            transform: scale(1) ;
        `
    }
`



const Score = styled.p`
    color: ${({theme}) => theme.color.mainBlue};
    font-size: 2em;
    font-weight: bold;
`

const Buttons = styled.div`
    display: flex;
    
    gap: .5em;
    margin-top: .4em;

    button {
        font-size: .5em;
        appearance: none;
        padding-inline: 1em;
        padding-block: .5em;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        

    }

    & :first-child {
        color: #FFF;
        background-color: ${({theme}) => theme.color.mainBlue};
        
        
        &:hover {
            background-color: ${({theme}) => theme.color.darkBlue};
        }
    }

    & :last-child{
        &:hover {
            background-color: hsl(0, 0%, 85%);
        }
    }
`

const CancelLink = styled(Link)`
    font-size: .5em;
    appearance: none;
    padding-inline: 1em;
    padding-block: .5em;
    border: none;
    border-radius: 5px; 
`



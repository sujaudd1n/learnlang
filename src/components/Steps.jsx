/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import stepDescription from "../data/stepDescription";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@mui/joy";


function Step({ number }) {
    const title = stepDescription[number].title;
    const content = stepDescription[number].content.split('\n')[0];

    return (
        <div
            css={css`
            margin-bottom: 10px;
        `}
        >
            <h3>⚡ Step {number + 1} - {title}</h3>
            <p
                css={css`
            padding-left: 40px;
            `}
            >
                {content}
            </p>
        </div>
    )
}
export default function Steps() {
    return (
        <div
            css={css`
        flex-basis: 50%;
        display: flex;
        flex-flow: column;
        gap: 40px;
        margin-bottom: 80px;
        `}
        >
            <div>
                <p>
                    For learning a new programming language, there are steps and patterns that can streamline the learning process. This guide provides a straightforward and comprehensive roadmap to help you quickly and efficiently acquire a new programming language.
                </p>
                <p>
                    Our approach is informed by established best practices, drawing inspiration from the book "Engineering Software as a Service: An Agile Approach Using Cloud Computing" by Armando Fox and David Patterson.
                </p>
                <p>
                    We'll start by outlining the key steps to learn a new programming language, followed by a discussion on how these steps can be applied to various programming languages, helping you navigate the learning process with ease.
                </p>
            </div>
            <div
                id="steps"
                className="steps"
            >
                <h2>📝 Steps</h2>
                {stepDescription.map((sd, idx) => (
                    <Step
                        key={idx}
                        number={idx}
                    />))}
            </div>
            <RouterLink
                to="/steps"
            >
                <Button>Learn More</Button>
            </RouterLink>
        </div >
    )
}

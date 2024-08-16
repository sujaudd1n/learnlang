/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import Showdown from "showdown";
import stepDescription from "../data/stepDescription";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@mui/joy";

const converter = new Showdown.Converter();

function Step({ number }) {
    const title = stepDescription[number].title;
    const content = stepDescription[number].content;

    return (
        <div
            css={css`
            margin-bottom: 10px;
        `}
        >
            <h3>📌 Step {number + 1} - {title}</h3>
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
                    There are some common steps and patterns in learning a new language. Here, the goal is to give you a simple and comprehensive guide and steps to learn a new programming language, making the process fast and efficient.
                </p>
                <p>
                    Although there are many approaches, this site is currently based on mostly the steps mentioned in the book <q>Engineering Software as a Service: An Agile Approach Using Cloud Computing</q> by Armando Fox and David Patterson.
                </p>
                <p>
                    First, the steps will be explained. Then, how those steps apply to different programming languages will be discussed.
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
                <Button>Learn more</Button>
            </RouterLink>
        </div >
    )
}

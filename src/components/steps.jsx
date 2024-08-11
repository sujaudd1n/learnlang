/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import Showdown from "showdown";
import stepDescription from "../data/stepDescription";

const converter = new Showdown.Converter();

function Step({ number }) {
    const title = stepDescription[number].title;
    const content = stepDescription[number].content;

    return (
        <div
            className="step"
            css={css`
            margin-bottom: 50px;
        `}
        >
            <h3>📌 Step {number} - {title}</h3>
            <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }}>
            </div>
        </div>

    )
}
export default function Steps() {
    return (
        <div>
            <h2>📝 Steps</h2>
            <div className="steps">
                {stepDescription.map((sd, idx) => (
                    <Step
                        key={idx}
                        number={idx}
                    />))}
            </div>
        </div >
    )
}

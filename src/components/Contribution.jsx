/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export default function Contibution() {
    return (
        <div>
            <a
                href="https://github.com/sujaudd1n/learnlang"
                target="_blank"
                css={css`
                display: block;
                margin: 10px 0;
            border-radius: 10px;
            padding: 10px;
            background-color: var(--accent);
            color: var(--primary);
            transition: background-color 200ms ease;
            &:hover{
                text-decoration: none;
                background-color: var(--accent-light);
            }
            `}

            >

                ✨ Contibute on Github and help us grow.
            </a>
        </div>
    )
}
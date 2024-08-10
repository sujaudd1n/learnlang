/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export default function Contibution() {
    return (
        <div>
            <p
                css={css`
            border-radius: 10px;
            padding: 10px;
            background-color: var(--accent);
            color: var(--primary);
            `}
            >
            ✨ Contibute on <a
                    href="https://github.com/sujaudd1n/learnlang"
                    target="_blank"
                >
                    Github </a>
                and help us grow.
            </p>
        </div>
    )
}
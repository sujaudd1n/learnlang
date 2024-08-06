/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export default function Header() {
    return (
        <header>
            <h1 
            css={css`
            text-align: center;
            overflow-wrap: break-word;
            color: transparent;
            background-image: linear-gradient(to right, var(--text), var(--accent));
            background-clip: text;
            font-size: 3rem;
            margin: 0;
            `}
            >Simple yet Comprehensive guide to learn a new language.</h1>
        </header>
    )
}
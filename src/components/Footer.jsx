/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export default function Footer() {
    return (
        <footer>
            <p 
            css={css`
            font-size: small;
            `}
            >&copy; learnlang {new Date().getFullYear()}</p>
        </footer>
    )
}
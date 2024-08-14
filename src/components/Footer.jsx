/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import FullWidthLink from "./FullWidthLink"

export default function Footer() {
    return (
        <footer>
            <FullWidthLink
                href="https://github.com/sujaudd1n/learnlang"
                text="✨ Contibute on Github and help us grow."
                target="_blank"
            />
            <p
                css={css`
            font-size: small;
            `}
            >&copy; learnlang {new Date().getFullYear()}</p>
        </footer>
    )
}
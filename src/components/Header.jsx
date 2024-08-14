/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import FullWidthLink from "./FullWidthLink"

export default function Header() {
    return (
        <>
            <header
                css={css`
            `}
            >
                <h1
                    css={css`
            text-align: center;
            overflow-wrap: break-word;
            color: transparent;
            background-image: linear-gradient(to right, var(--text), var(--accent));
            background-clip: text;
            font-size: calc(2rem + 3dvw);
            margin: calc(20px + 5dvw) 0;
            `}
                >
                    Simple yet Comprehensive guide to learn a new language.</h1>
                <FullWidthLink
                    href="#selectlang"
                    text="</> Choose Your Language and Get Started!"
                />
            </header>
        </>
    )
}
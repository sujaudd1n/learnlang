/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export default function FullWidthLink({ href, text, target="_self", maxWidth="fit-content"}) {
    return (
        <a
            href={href}
            target={target}
            css={css`
             
            `}

        >
            {text}
        </a>
    )
}
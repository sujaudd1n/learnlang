/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export default function FullWidthLink({ href, text}) {
    return (
        <a
            href={href}
            css={css`
                display: block;
                margin: 10px 0;
            border-radius: 10px;
            padding: 10px;
            margin: 60px 0;
            background-color: var(--accent);
            color: var(--primary);
            transition: background-color 200ms ease;
            &:hover{
                text-decoration: none;
                background-color: var(--accent-light);
            }
            `}

        >
            {text}
        </a>
    )
}
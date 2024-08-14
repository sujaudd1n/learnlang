/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export default function FullWidthLink({ href, text, target="_self", maxWidth="fit-content"}) {
    return (
        <a
            href={href}
            target={target}
            css={css`
                display: block;
                margin: 10px 0;
            border-radius: 10px;
            padding: 10px;
            margin: 60px auto;
            background-color: var(--accent);
            color: var(--primary);
            transition: background-color 200ms ease;
            max-width: ${maxWidth};
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
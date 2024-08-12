/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { SvgIcon } from "@mui/material"
import { Link } from "react-router-dom"

export default function LanguageCard({ name, href, color, icon }) {
    return (
        <Link
            id="language-card"
            to={href}
            css={css`
        display: block;
        width: 150px;
        height: 200px;
        border-radius: 10px;
        background-color: ${color};
        color: var(--primary);
        position: relative;
        &:hover{
            filter: brightness(120%)
        }
        `}
        >
            <div
                css={css`
            position: absolute;
            bottom: 10px;
            right: 10px;
            font-size: 1.5rem;
            display: flex;
            flex-flow: column;
            align-items: flex-end;
            gap: 10px;
            font-weight: bold;
            `}
            >
                <img src={icon} alt={name}
                    css={css`
                    width: 50px;
                    height: 50px;
                `}
                />
                {name}
            </div>
        </Link>
    )
}
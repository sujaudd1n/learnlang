/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import LanguageCard from "./LanguageCard"



export default function SelectLang({languages}) {
    return (
        <div id="selectlang"
        css={css`
        flex-basis: 50%;
        `}
        >
            <h2>Select Language</h2>
            <p>
                Now, let's see how those steps apply to specific language.
            </p>
            <div
                className="langlist"
                css={css`
            display: flex;
            justify-content: space-around;
            flex-flow: row wrap;
            gap: 20px;
            `}
            >
                {languages.map(language => (
                    <LanguageCard
                        key={language.name}
                        name={language.name}
                        path={language.path}
                        color={language.color}
                        icon={language.icon}
                    />
                ))}

            </div>
        </div>
    )
}
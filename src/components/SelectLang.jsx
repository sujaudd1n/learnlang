/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import LanguageCard from "./LanguageCard"

function createLanguageObject(name, href, color, icon) {
    return {
        name: name,
        href: href,
        color: color,
        icon: icon
    }
}

const languages = [
    createLanguageObject("JavaScript", "/javascript", "#F7DF1E", "/icons/javascript.svg"),
    createLanguageObject("Python", "/python", "#3776AB", "/icons/python.svg"),
    createLanguageObject("C", "/c", "#A8B9CC", "/icons/c.svg"),
    createLanguageObject("C++", "/cpp", "#00599C", "/icons/cplusplus.svg"),
]

export default function SelectLang() {
    return (
        <div id="selectlang">
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
                        href={language.href}
                        color={language.color}
                        icon={language.icon}
                    />
                ))}

            </div>
        </div>
    )
}
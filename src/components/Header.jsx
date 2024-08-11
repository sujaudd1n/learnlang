/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

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
            font-size: 3rem;
            margin: 0;
            `}
                >
                    Simple yet Comprehensive guide to learn a new language.</h1>
                <div>
                    <p>
                        There are some common steps and patterns in learning a new language. Here, the goal is to give you a simple and comprehensive guide and steps to learn a new programming language, making the process fast and efficient.
                    </p>
                    <p>
                        Although there are many approaches, this site is currently based on mostly the steps mentioned in the book <q>Engineering Software as a Service: An Agile Approach Using Cloud Computing</q> by Armando Fox and David Patterson.
                    </p>
                    <p>
                        First, the steps will be explained. Then, how those steps apply to different programming languages will be discussed.
                    </p>
                </div>
            </header>
        </>
    )
}
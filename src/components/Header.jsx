/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from '@mui/joy/Button';
import { Stack } from "@mui/joy";


export default function Header() {
    return (
        <header
            css={css`
                padding: 60px  0;
                margin-bottom: 80px;
                max-width: max(var(--max-page-width), 80dvw);
                margin: 0 auto;
            `}
        >
            <Stack
                direction="column"
                spacing={10}
                alignItems="center"
            >

                <h1
                    css={css`
            text-align: center;
            overflow-wrap: break-word;
            color: transparent;
            background-image: linear-gradient(to bottom, var(--text), var(--accent));
            background-clip: text;
            font-size: max(48px, min(5vw, 70px));
            font-weight: 800;
            `}
                >
                    Simple and efficient way to learn a new programming language
                </h1>
                <p
                    css={css`
                    line-height: 1.5rem;
                    text-align: center;
                    margin: 0 auto;
                    max-width: 700px;
                    `}
                >
                    From the basics of typing systems to advanced testing and debugging
                    techniques, our comprehensive guide will walk you through the entire process of learning a new language.
                </p>
                <Stack direction="row"
                    justifyContent="center"
                    spacing={2}
                >
                    <Button
                        onClick={() => window.location.replace(window.location.origin + "#steps")}
                    >
                        Get Started</Button>
                    <Button
                        variant="soft"
                        onClick={() => window.location.replace(window.location.origin + "#selectlang")}
                    >
                        Select Language</Button>
                </Stack>
            </Stack>
        </header>
    )
}
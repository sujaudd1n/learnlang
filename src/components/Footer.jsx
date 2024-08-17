/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Link, Stack } from "@mui/joy"
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    return (
        <footer
            css={css`
        padding: 20px;
        background-color: var(--primary-light);
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        `}
        >
            <div
                css={css`
        max-width: var(--max-page-width);
        margin: 0 auto;
        background-color: var(--primary-light);
        `}

            >

                <Stack>
                    <Link
                        underline="none"
                        target="_blank"
                        href="https://github.com/sujaudd1n/learnlang"
                        sx={{
                            color: "var(--text)",
                        }}
                    >
                        <GitHubIcon
                            fontSize="small"
                            sx={{ marginRight: "5px" }}
                        />
                        Contibute on Github
                    </Link>
                    <p
                        css={css`
            font-size: small;
            margin-bottom: 0;
            `}
                    >
                        &copy; LearnLang {new Date().getFullYear()}
                    </p>
                </Stack>

            </div>
        </footer >
    )
}
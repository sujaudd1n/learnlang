/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Link, Stack } from "@mui/joy"
import { Link as RRLink } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';

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

                <Stack
                    spacing={1}
                >
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
                    <Link
                        component={RRLink}
                        to="/about"
                        sx={{
                            color: "var(--text)"
                        }}
                    >
                        <InfoIcon
                            fontSize="small"
                            sx={{
                                marginRight: "5px"
                            }}
                        />
                        About
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
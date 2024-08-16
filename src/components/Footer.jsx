/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Link } from "@mui/joy"

export default function Footer() {
    return (
        <footer>
            <Link
                underline="none"
                variant="solid"
                target="_blank"
                href="https://github.com/sujaudd1n/learnlang"
                sx={{
                    padding: "10px",
                    display: "block",
                    maxWidth: "fit-content",
                    margin: "0 auto",
                    borderRadius: "5px"
                }}
            >
                ✨ Contibute and help us grow on Github
            </Link>
            <p
                css={css`
            font-size: small;
            `}
            >&copy; learnlang {new Date().getFullYear()}</p>
        </footer >
    )
}
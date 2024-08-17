/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"
import { useEffect, useState } from "react"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Stack, Alert } from "@mui/joy";
import { CircularProgress } from "@mui/joy";
import { Link } from "react-router-dom";
import MarkdownIt from "markdown-it";
import hljs from 'highlight.js';

import "highlight.js/styles/stackoverflow-dark.min.css";
import "./RenderedMarkdown.css"

const md = MarkdownIt(
    {
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value;
                } catch (__) { }
            }

            return ''; // use external default escaping
        }
    }
);

export default function RenderedMarkdown({ filepath }) {
    const [markdown, setMarkdown] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(`${filepath.toLowerCase()}`)
            .then(res => res.text())
            .then(markdown => {
                setMarkdown(markdown)
            })
            .catch(e => {
                setError(e.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])

    if (loading) {
        return (
            <Stack direction="column" alignItems="center"
                sx={{
                    margin: "50px 0"
                }}
            >
                <CircularProgress />
                <p>Loading</p>
            </Stack>


        )
    }

    if (error) {
        return (
            <Alert color="danger"
                sx={{ margin: "50px 0" }}
            >Error while fetching data!: {error} </Alert>
        )
    }

    return (
        <div
            className="rendered-markdown"
            css={css`
        max-width: 928px;
        margin: 30px auto 100px auto;
        `}
        >
            <Link
                to="/"
            >
                <Button variant="plain"
                    startDecorator={<ArrowBackIcon />}
                >
                    Home
                </Button>
            </Link>

            <div
                dangerouslySetInnerHTML={{ __html: md.render(markdown) }}>
            </div>
        </div >


    )
}
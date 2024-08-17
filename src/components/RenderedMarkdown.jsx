/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"
import { useEffect, useState } from "react"
import Showdown from "showdown";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from "@mui/joy";
import { Link } from "react-router-dom";
import "./RenderedMarkdown.css"

const converter = new Showdown.Converter();

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
            <div>Fetching data!</div>
        )
    }
    if (error) {
        return (
            <div>Error while fetching data!: {error} </div>
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
                dangerouslySetInnerHTML={{ __html: converter.makeHtml(markdown) }}>
            </div>

        </div >
    )
}
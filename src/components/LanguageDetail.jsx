/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useEffect, useState } from "react"
import Showdown from "showdown"

const converter = new Showdown.Converter();

export default function LanguageDetail({ name }) {
    const [languageDetailText, setLanguageDetailText] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(`/languages/${name.toLowerCase()}.md`)
            .then(res => res.text())
            .then(languageDetailText => {
                setLanguageDetailText(languageDetailText)
                setError(null);
            })
            .catch(e => {
                setError(e.message)
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
        <>
            <div className="detail" dangerouslySetInnerHTML={{ __html: converter.makeHtml(languageDetailText) }}></div>
        </>
    )
}
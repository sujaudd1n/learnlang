/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"
import Header from './Header'
import Steps from './Steps'
import SelectLang from './SelectLang'

export default function Homepage({ languages }) {
    return (
        <>
            <Header />
            <div
                className="main"
                css={css`
              margin: 0 auto 80px 0;
            @media (min-width: 928px) {
              display: flex;
              flex-flow: row;
              justify-content: space-between;
              gap: 50px;
              max-width: 1500px;
              margin: 0 auto;
            }
            `}
            >
                <Steps />
                <SelectLang languages={languages} />
            </div>
        </>
    )
}
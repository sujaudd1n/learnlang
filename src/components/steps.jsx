/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export default function Steps() {
    return (
        <div>
            <p>
        There are some common steps and patterns in learning a new language. On this site, the goal is to give you a simple and comprehensive guide and steps to learn any language, making the process fast and efficient.
            </p>
            <p>
        Although there are many approaches, this site is currently based on the steps mentioned in the book <q>Engineering Software as a Service: An Agile Approach Using Cloud Computing</q> by Armando Fox and David Patterson.
            </p>
            <p>
        First, the steps will be explained. Then, how those steps apply to different programming languages will be discussed
            </p>
            <div className="steps">
                <div className="step">
                    <h3>Step 1 - Learn type system</h3>
                </div>

                <div className="step">
                    <h3>Step 2 - Learn primitives</h3>
                </div>

                <div className="step">
                    <h3>Step 3 - Learn abstraction mechanisms</h3>
                </div>
                <div className="step">
                    <h3>Step 4 - Learn idioms</h3>
                </div>

                <div className="step">
                    <h3>Step 5 - Learn dependency management</h3>
                </div>

                <div className="step">
                    <h3>Step 6 - Learn debugging </h3>
                </div>

                <div className="step">
                    <h3>Step 7 - Learn testing </h3>
                </div>
            </div>
            <div className="choose">
                Now, let's see how those steps apply to specific language.
            </div>
            <div>
                <p>
                    These steps are just kind of suggestions. 
                </p>
                <p>Contibute on <a href="https://github.com/sujaudd1n/learnlang">github</a></p>
            </div>
        </div>
    )
}

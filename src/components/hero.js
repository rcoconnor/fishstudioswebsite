import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
    .title {
        margin-bottom: 0; 
    }
    .subtitle {
        margin-top: 0; 
    }
    .highlighted {
        box-shadow: inset - -2.5rem 0 #cdf3e1;
    }
` 

const Hero = () => {
    return (
        <StyledSection id="hero">
            <h1 className="title">
                Hello <span role="img" aria-label="emoji">🐟</span><br />
                We are Fish Studios
            </h1>
            <h2 className="subtitle">
                We design and build <span className="highlighted">video games for the web</span>.
            </h2>
            <div className="description">
                Chicago, IL & Tuscaloosa, AL
            </div>
        </StyledSection>
    )
}

export default Hero


import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 20px 4px;
    color: var(--highlight);
    font-family: var(--font-mono), serif;
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin: 10px 0;
    color: var(--slate);
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 30px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hello, my name is</h1>;
  const two = (
    <div className="big-heading">
      <span className="big-heading highlight">Kathleen</span> <span>Povadora</span>
    </div>
  );
  const three = <h3 className="heading">I can design, code & play.</h3>;
  const four = (
    <p>
      I’m a web & graphics designer passionate about crafting exceptional digital experiences. With
      a background in web development, I blend creativity and technology to build accessible,
      human-centered products. Currently, I work as an Advanced App Engr. Specialist{' '}
      <a href="https://github.com/kaeri-gg" target="_blank" rel="noreferrer">
        {' '}
        @Accenture{' '}
      </a>{' '}
      and I’m eager to explore game development to bring my love for art and interactivity to life.
    </p>
  );
  const five = (
    <a
      className="email-link"
      href="https://www.behance.net/kaeri-gg"
      target="_blank"
      rel="noreferrer">
      View Behance
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;

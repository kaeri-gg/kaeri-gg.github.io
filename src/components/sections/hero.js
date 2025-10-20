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
  const three = <h3 className="heading">Designer | Developer | Gamer</h3>;
  const four = (
    <p>
      I’m a Front-end Developer experienced in both web and graphic design. Right now, I am shifting
      my focus towards game development- building small personal projects while pursuing a Master’s
      degree in Digital Learning Games at
      <a href="https://www.tlu.ee/" target="_blank" rel="noreferrer">
        {' '}
        @Tallinn University.{' '}
      </a>{' '}
      Alongside my studies, I’m exploring game engines, Blender, ReactJS and ThreeJS to build more
      interactive digital experiences, combining programming and designing.
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

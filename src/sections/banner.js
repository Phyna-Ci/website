/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, Box, Container, Button } from 'theme-ui';
import * as React from 'react';
import SectionHeading from 'components/section-heading';
import Services from './services';
import BackgroundVideo from 'assets/background.gif'

const Banner = () => {
  return (
    <Box as="section" id="about" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <SectionHeading
            sx={styles.heading}
            description={null}
          />
          <Box sx={styles.illustration}>
              <Box sx={styles.buttonWrapper}>
                <Button>Learn More</Button>
              </Box>
          </Box>
        </Box>
      </Container>
      <Box as="section" id="products" sx={styles.absoluteBanner}>
        <Services />
      </Box>
    </Box>
  );
};

export default Banner;

const styles = {
  absoluteBanner: {
    width: '80%',
    marginLeft: '10%',
    position: ['relative', 'relative', 'relative', 'absolute'],
    top: [null, null, null, '82.25%', '83%', '90%'],
    zIndex: 20,
  },
  section: {
    backgroundImage: [
      'linear-gradient(140deg, #291EA2 0%, #AB6C84 60%)',
      `url(${BackgroundVideo})`
    ],
    position: 'relative',
    pt: [105, null, null, 140, 15, null, 170],
    pb: [8, null, null, 0],
    zIndex: 0,
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  contentWrapper: {},
  heading: {
    color: '#FFFFFF',
    mb: [50],
    h2: {
      fontSize: [8, null, null, 8, 9, 10, 11],
      lineHeight: [1.57],
    },
  },
  illustration: {
    height: '300px',
    display: ['block', null, null, 'flex'],
    position: 'relative',
    img: {
      display: ['none', null, null, 'block'],
      maxWidth: ['90%'],
      m: ['0 auto'],
    },
  },
  buttonWrapper: {
  },
};

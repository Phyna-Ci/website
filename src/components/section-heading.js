/** @jsxRuntime classic */
/** @jsx jsx */
import * as React from 'react';
import { jsx, Box, Heading, Text } from 'theme-ui';

const SectionHeading = ({ title, description, ...props }) => {
  return (
    <Box sx={styles.heading} {...props}>
      {
        title ? (
          <Heading sx={styles.title}>{title}</Heading>
        ) : (
          <Heading as="h3">{ (
            <>
              Technology for <br />
              an Evolving World
            </>
          )}</Heading>
        )
      }
      {
        description ? (
          <Text sx={styles.description}>
            {description}
          </Text>
        ) : (
          <Text sx={styles.defaultDescription} as="p">
            We design interactive Artificial Intelligence (AI) systems that integrate sophisticated but intuitive<br />
            machine learning techniques personalised user experience anywhere in the world.<br />
          </Text>
        )
      }
    </Box>
  );
};

export default SectionHeading;

const styles = {
  heading: {
    margin: ['0 auto 60px'],
    alignItems: 'center',
    h3: {
      marginTop: '100px',
      lineHeight: 1.18,
      color: '#FFFFFF',
      fontWeight: 'bold',
      position: 'relative',
      width: '100%',
      fontSize: ['28px', '35px', null, '45px', null, '50px', '85px'],
      maxWidth: ['500px', null, null, null, null, null, '100%'],
      '&:before': {
        content: '""',
        width: ['290px', null, null, null, null, '260px', '381px'],
        height: '15px',
        backgroundPosition: 'center center',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        bottom: '-15px',
        right: ['15px', null, null, null, null, '140px', '100px'],
        display: ['none', null, null, null, null, 'block'],
      },
    },
  },
  title: {
    fontFamily: 'heading',
    fontWeight: 900,
    textAlign: 'center',
    fontSize: ['13px', '20px', null, '30px', null, '35px', '60px'],
    lineHeight: [1.33, 1.33, 1.48],
    letterSpacing: ['-0.5px', null, null, null, null, null, '-1px'],
    img: {
      ml: ['15px'],
      position: 'relative',
      top: '8px',
    },
  },
  description: {
    color: 'heading',
    fontSize: [1, null, null, 2],
    lineHeight: [1.58, 1.58, 1.58, 2.2],
    // maxWidth: ['none', 'none', 'none', 'none', 490],
    margin: '15px auto 0',
    textAlign: 'center',
  },
  defaultDescription: {
    lineHeight: 1.93,
    color: '#FFFFFF',
    marginTop: ['10px', null, null, '35px'],
    fontSize: ['16px'],
    pr: ['15px', 0],
    br: {
      display: ['none', null, null, null, null, 'block'],
    },
  },
};

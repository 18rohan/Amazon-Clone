import React from 'react';
import styled from 'styled-components';

// Importing components
import HomeCarousel from './HomeCarousel.component';

const MainFeed = (props) =>{
  return (
    <Container>
      <HomeCarousel/>
    </Container>
  );
}

const Container = styled.div`
  width:100%;
  height:50vh;

  background-position: top center;
`

export default MainFeed

import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display : flex;
  justify-content : space-between
`;
const Left = styled.div`
  height: 60px;
`;const Center = styled.div`
height: 60px;
`;const Right = styled.div`
height: 60px;
`;
function Navbar() {
  return <Container>
      <Wrapper>
          <Left>
              Left
          </Left>
          <Center>
              center
          </Center>
          <Right>
              right
          </Right>
          </Wrapper>
          </Container>;
}

export default Navbar;

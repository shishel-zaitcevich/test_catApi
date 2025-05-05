import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 20px;
  text-align: center;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 5px;
`;

const StyledImage = styled.img`
  max-height: 100%;
  width: auto;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px #999;
`;

interface Props {
  imageUrl: string;
}

const CatImage: React.FC<Props> = ({ imageUrl }) => {
  if (!imageUrl) return null;
  return (
    <Wrapper>
      <StyledImage src={imageUrl} alt="Random Cat" />
    </Wrapper>
  );
};

export default CatImage;

import React from 'react'
import { Container } from '../components'

const BeforeAfterSkeleton = () => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl my-10 bg-white/5 backdrop-blur-md animate-pulse h-[300px] md:h-[400px]"></div>
    </Container>
  );
};

export default BeforeAfterSkeleton;

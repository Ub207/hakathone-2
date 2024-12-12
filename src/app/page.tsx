import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import Hero from '@/components/Hero';
import Card from '@/components/Card';
import Running from '@/components/Running';
import Essentials from '@/components/essential';
import Gear from '@/components/Gearup';
import Stan from '@/components/Stan';


const Homepage = () => {
  return (
    <main className='max-w-screen-2xl mx-auto'>
      <Hero />
      <Card />
      <Running />
      <Gear />
      <Stan />
      <Essentials />
    </main>
  )
}

export default Homepage

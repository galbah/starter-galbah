// import WebsiteScreen from '@/lib/components/website-screen';
// import { COURSE_WELCOME_TEXT } from '@/lib/config';
// import Link from 'next/link';
'use client'

import Image from 'next/image';
import React, { useState } from 'react';

export default function Home() {
  const [isSectionVisible, setSectionVisibility] = useState(false);

  const turnOnSection = () => {
    setSectionVisibility(true);
  };

  const turnOffSection = () => {
    setSectionVisibility(false);
  };

  return (  
    <>
    <body>
        <header>
            <h1>Adopt, Dont Shop: Why You Should Adopt a Dog</h1>
        </header>
    
        <main>
            <section>
                <h2>1. Save a Life</h2>
                <p>Millions of dogs are abandoned or end up in shelters every year. By adopting, you give a loving home to a dog in need and potentially save their life.</p>
            </section>
    
            <section>
                <h2>2. Reduce Overpopulation</h2>
                <p>Adopting helps reduce the demand for bred dogs and lowers the risk of overpopulation in shelters. Its a responsible choice that contributes to the well-being of the dog community.</p>
            </section>
    
            <section>
                <h2>3. Healthier Options</h2>
                <p>Shelter dogs are often spayed or neutered, vaccinated, and may come with a health check. This means youre more likely to adopt a healthy dog, and youll also avoid supporting unethical breeding practices.</p>
            </section>
    
            <section>
                <h2>4. Unconditional Love</h2>
                <p>Adopted dogs are grateful for a second chance and can form incredibly strong bonds with their owners. Experience the joy of giving a loving home and receiving unconditional love in return.</p>
            </section>

            <section>
                <button onClick={turnOnSection}>I want to adopt a dog!</button>
            </section>

            {isSectionVisible && (
              <section className='happy-section'>
              <p>YAY!</p>
              <Image src="/dog.jpg" alt="dog photo" width={320} height={260} priority/>
              <br></br>
            <button onClick={turnOffSection}>close</button>
            </section>
            )}
            
        </main>
        
    
        <footer>
            <p>Consider adopting your next furry friend and make a positive impact on their life!</p>
        </footer>
  
    </body> 
    </>   
  )
}
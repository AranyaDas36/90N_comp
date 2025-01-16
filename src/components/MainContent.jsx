import React from 'react';

const content = [
  {
    paragraph: "Pixel-perfect sites",
    image: "https://cdn.prod.website-files.com/5dbfba8e8b3107b9aa912e57/6740c104975def691f2cf69f_Comments%20-%20develop.webp",
  },
  {
    paragraph: "Complex animations",
    image: "https://cdn.prod.website-files.com/5dbfba8e8b3107b9aa912e57/6740bfc71457df69dec72044_Styling%20-%20Spatial.webp",
  },
  {
    paragraph: "The true power of content",
    image: "https://cdn.prod.website-files.com/5dbfba8e8b3107b9aa912e57/6740c2e457d15653cc10a544_Interactions%20-%20Castle.webp",
  },
];

function MainContent({ selectedContentIndex }) {
  const selectedContent = content[selectedContentIndex];

  return (
    <main className="flex-1 p-4 mt-16">
      <img src={selectedContent.image} alt={selectedContent.paragraph} className="mt-0" />
      <p className='pt-6 pb-2 text-opacity-80 text-neutral-800 text-2xl'>{selectedContent.paragraph}</p>

    </main>
  );
}

export default MainContent;
export { content };

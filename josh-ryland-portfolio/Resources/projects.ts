interface project {
  image: string,
  text: string,
  url: string,
}

export const projects: Array<project> = [
  {
    image: '/ca-road-condition-small.png',
    url: 'https://caroadcondition.com/',
    text: 'Created and designed for the World Bank. This website utilizes next.js, React.js, Typescript and Firebase to allow users to review roads throughout Central Asia.'
  },
  {
    image: '/vandaglas.png',
    url: 'https://my.vandaglas.nl/login',
    text: 'Co-designed and created an Order Tracking Website for Vandaglas. Utilizing React.js, Google Cloud and Node.js. Allowing uses to see live status updates for thousands of orders.' 
  },
  {
    image: '/ca-road-condition-small.png',
    url: '',
    text: 'Lorem Ipsum 2' 
  },
]
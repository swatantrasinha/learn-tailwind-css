https://www.youtube.com/watch?v=dFgzHOX84xQ&t=1989s

1. npm init -y
2. npm install next@12 react react-dom

3. In Package.json 
in scripts remove -  "test": "echo \"Error: no test specified\" && exit 1"
and add below :
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },

4. At this point if we run command in terminal - npm run dev
  it will show error - " Couldn't find a `pages` directory. Please create one under the project root"

  5. So first create pages folder parallel to package.json and add file index.js in it 
/*
import React, { Component } from 'react';
export default class index extends Component {
  render() {
    return (
      <div>This is Index file inside pages folder</div>
    )
  }
}
*/
now run - npm run dev , and in browser - localhost:3000 it will show - This is Index file inside pages folder

6. Now add changes for _app.js and Layout
create file _app.js inside pages folder
/*
import React from 'react'
import Header from './header/Header';
import Footer from './footer/Footer';
import "../styles/global.css";

const App = (props) => {
    const {Component, pageProps} = props;
    return (
        <>
           <Header/>
            <main>
                <>
                    <h1>This is main area and Landing Page will display here </h1>
                    <Component {...pageProps} />
                </>
            </main>
            <Footer/>
        </>
    )
}
export default App
*/



7. Tailwaind installation - https://tailwindcss.com/docs/guides/nextjs
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p  => this will generate - tailwind.config.js and postcss.config.js.

8. Inside 
replace content: [] with 
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

9. Inside global.css
@tailwind base;
@tailwind components;
@tailwind utilities;

10. Inside _app.js, replace h1 with tailwind css class
{/* <h1>This is main area and Landing Page will display here </h1> */}
    <h1 className="text-3xl font-bold underline"> Hello world!  </h1>

Now tailwind setup is done , now we will follow as per video



 



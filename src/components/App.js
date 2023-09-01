import './App.css';
import { useState,useRef} from 'react';
import NavigationEditor from './Components/NavigationEditor'
import Footer from './Components/Footer/Footer'



function App() {
  const [component, setComponent] = useState("Navbar");
  const [Navbar, setNavbar] = useState(false);
  const [footerBlock, setFooterBlock] = useState(false);
  const linkName = useRef(null);
  const linkRef = useRef(null);

  
  const handleChange = (e) => {
    setComponent(e.target.value);
    console.log("Component is",component);
  }


  // create a function to add component
  const addComponent = () => {
    // get the component by id preview 
    const preview = document.getElementById('preview');
    

    console.log("Component is",component);
    if(component === "Navbar"){
      console.log("Navbar is added");
      setNavbar(true);
      setFooterBlock(false);
      // create a nav element
      // const nav = document.createElement('nav');
      // // give 100% width to nav
      // nav.style.width = "100%";
      // // give height to nav
      // nav.style.height = "50px";
      // // give background color to nav
      // nav.style.backgroundColor = "blue";
      // // give flex display to nav
      // nav.style.display = "flex";
      // // give justify content to nav
      // nav.style.justifyContent = "space-between";
      // // add class to nav
      // nav.classList.add('navbar');
      // // append nav to preview
      // preview.appendChild(nav);


    }
    else if(component === "Content"){
    }
    else if(component === "Footer"){
      setFooterBlock(true);
      setNavbar(false);
    }
  }


  const addLink = () => {
    console.log("Link is added");
    // get the navbar class element 
    const navbar = document.querySelector('.navbar');
    // create a div with class links 
    const links = document.createElement('div');
    // create a link element
    const link = document.createElement('a');
    // add text to link
    link.innerText = linkName.current.value;
    // add href to link
    link.href = linkRef.current.value;
    // add class to link
    link.classList.add('link');
    // append link to navbar
    navbar.appendChild(link);
  }

  // create a function named addNavbar to add the navbar to the preview
  const addNavbar = () => {
    // get the preview element
    const preview = document.getElementById('preview');

    // get the element Navbar from id 
    // const navbar = document.getElementById('NavBar');
    const navbar = document.querySelector('.navigation-block');

    // add the navbar to the preview
    preview.appendChild(navbar);
  }


  return (
    <div className="App">
     <p>Create your app</p>
     <label htmlFor="comp">Select Component</label>
      <select name="comp" id="comp" onChange={handleChange}>
        <option value="Navbar">Navbar</option>
        <option value="Content">Main Section</option>
        <option value="Footer">Footer</option>
      </select>
      <button onClick={addComponent}>Add</button>

      {
        Navbar&& (<NavigationEditor addNavbar={addNavbar}/>)

        
      }
      
      {
        footerBlock&& (<Footer />)
      }

      <div className='preview' id='preview'>

        <h1>Preview</h1>

      </div>

    </div>
  );
}

export default App;


// import React from 'react'
// import NavigationEditor from './Components/NavigationEditor'

// const App = () => {
//   return (
//     <div>
//       <ContentBlockFooter />
//     </div>
//   )
// }

// export default App


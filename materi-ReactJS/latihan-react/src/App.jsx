import './App.css'

/**
 * membuat component header 
 * component header menampilkan navigasi
 */

function Header() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

/**
 * membuat component content
 * component content menampung konten utama
 */

function Content() {
  return <h1>Content</h1>;
}

/**
 * membuat component footer
 * component footer menampilkan footer
 */

function Footer() {
  return (
    <footer>
      <h2>NF Academy</h2>
      <p>Created by React JS</p>
    </footer>
  );
}

/**
 * 
 * 
 */

function Hello() {
  const nama = "Ihsan";
  return (
    <>
    <h2>Hello React</h2>
    <p>Saya {nama} - Seorang Frontend Developer</p>
    </>
  );
}

function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Profile(props) {
  return (
    <>
    <h1>{props.name}</h1>
    <p>{props.age}</p>
    <p>{props.country}</p>
    </>
  )
}

function App() {
  return (
  // ini fragemnet ( <> )
  <> 
    <Header />
    <Content />
    <Hello />
    <Greeting name ="alice" />
    <Greeting name ="bob" />
    <Profile name ="Ghani" age={25} country="Indonesia" />
    <Footer />
  </>
  );
}

export default App

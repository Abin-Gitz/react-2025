import './App.css';
import Button from './components/Button/button';
import Navbar from './components/Navbar/navbar';
import Box from './components/Box/box';
import Grid from './components/Grid/grid';
const App = () => {
  // const username = 'Abin';
  // const firstTag = <h1>Hello</h1>;
  // const ar = ['apple', 'orange', 'mango'];

  // const secondTag = (
  //   <>
  //     <h1>Welcome</h1>
  //   </>
  // );

  const isLogedIn = true;

  // const onH1Clicked =()=>{
  //   console.log('Hello')
  //   console.log('Hey')
  // }

  return (
    <>
      {/* <h1 onClick={onH1Clicked}>hello</h1> */}
      <Navbar text="React" />
      <Button text="Register" bgColor="blue" />
      <Button text="Submit" bgColor="red" />
      <Button text="login" bgColor="green" />
      <Button text="logout" bgColor="red" />
      <Button bgColor="blue" />
      <Grid number={10} color={['red', 'green', 'blue']} />
      <img src="/car.jpg" alt="" />

      <Box
        title="This is title 1"
        description="  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, eligendi laboriosam? Nulla consequatur, incidunt veritatis ipsum doloribus laudantium qui natus ad reprehenderit optio tempora nam voluptates inventore saepe! Qui, consectetur."
      />
      <Box
        title="This is title 2"
        description=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, eligendi laboriosam? Nulla consequatur, incidunt veritatis ipsum doloribus laudantium qui natus ad reprehenderit optio tempora nam voluptates inventore saepe! Qui, consectetur."
      />
      {/* <h1>{isLogedIn ? 'Welcome User' : 'Please Login'}</h1>

      <ul>
        {ar.map(item => {
          return <li>{item}</li>;
        })}
      </ul>
      <h1>{username}</h1>
      {firstTag}
      {secondTag} */}
    </>
  );
};

export default App;

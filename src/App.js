
import { Box, Tile, Heading, Image, Section, Notification } from 'react-bulma-components';
import {Graphic} from './graphics';
import './g.css'
import img from './avatar.png'


function App() {
  return (
   
     
    <Section className='section'>
      <Box className='box'>
        <Tile kind="ancestor">
          <Tile size={8} vertical>
            <Tile>
              <Tile kind="parent" vertical>
                <Tile kind="child" renderAs={Notification} color="primary">
                  <Heading>Vertical...</Heading>
                  <Heading subtitle>Top tile</Heading>
                  
                </Tile>
                <Tile kind="child" renderAs={Notification} color="warning">
                  <Heading>Tiles...</Heading>
                  <Heading subtitle>Bottom Tile...</Heading>
                </Tile>
              </Tile>
              <Tile kind="parent">
                <Tile kind="child" renderAs={Notification} color="info">
                  <Heading>Middle Tile...</Heading>
                  <Image src={img}> </Image>
              
                </Tile>
              </Tile>
            </Tile>
            <Tile kind="parent">
              <Tile kind="child" renderAs={Notification} color="danger">
                <Heading>Wide tile</Heading>
                <Heading subtitle>Aligned with the right tile</Heading>
                <div className="content" />
              </Tile>
            </Tile>
          </Tile>
          <Tile kind="parent">
            <Tile kind="child" renderAs={Notification} color="success">
              <div className="content">
                <Heading>Tall tile</Heading>
                <Heading subtitle>With even more content</Heading>
                <div className="content" />
              </div>
            </Tile>
          </Tile>
        </Tile>
        <Graphic className='graphic'/>
      </Box>
      
    </Section>
   
  
  );
}

export default App;

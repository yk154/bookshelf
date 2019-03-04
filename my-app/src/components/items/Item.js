import * as React from "react"
import { Card, CardImg} from 'reactstrap';
import paris from '../src/IMG_7559.JPG';
import sf from '../src/IMG_3672.JPG';
import korea from '../src/IMG_6476.JPG';
import porto from '../src/IMG_6459.JPG';
import lisbon from '../src/IMG_8365.JPG';
import Belgium from '../src/IMG_8433.PNG';
import london from '../src/IMG_8640.PNG';
import rome from '../src/IMG_9278.JPG';
import ny from '../src/IMG_0723.PNG';
import prague from '../src/IMG_8678.JPG';
import "./Item.css"

class Item extends React.Component {

  render() {
    return (
      <div className = "items">
      <Card>
        <CardImg src= {paris} alt="Paris" />
      </Card>

      <Card>
        <CardImg src= {sf} alt="Paris" />
      </Card>

      <Card>
        <CardImg  src= {korea} alt="Paris" />
      </Card>

      <Card>
        <CardImg src= {porto} alt="Paris" />
      </Card>

      <Card>
        <CardImg src= {lisbon} alt="Paris" />
      </Card>

      <Card>
        <CardImg src= {Belgium} alt="Paris" />
      </Card>

      <Card>
        <CardImg src= {london} alt="Paris" />
      </Card>

      <Card>
        <CardImg src= {rome} alt="Paris" />
      </Card>

      <Card>
        <CardImg src= {ny} alt="Paris" />
      </Card>

      <Card>
        <CardImg src= {prague} alt="Paris" />
      </Card>

    </div>
    )
  }
}
export default Item
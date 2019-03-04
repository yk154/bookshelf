import * as React from "react"
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
import Modal from "react-responsive-modal"


class Item extends React.Component {
  state = {
    open: false,
    name: undefined,
    when: undefined,
    Stay: undefined,
    who: undefined
  }
  paris = {
    when: "When did I travelled this country? - Last Summer",
    where: "Where is best spot? - Versaille palace",
    who: "Who did I go with? - With my friend, we spend 3 days in Paris"
  }
  sf = {
    when: "When did I travelled this country? - Last Spring",
    where: "Where is best spot? - Mission Dolores Park",
    who: "Who did I go with? - With my friend, we spend 3 days here"
  }
  korea = {
    when: "When did I travelled this country? - Every Winter Break.",
    where: "Where is best spot? - Love all the places; here is my hometown",
    who: "Who did I go with? - Alone but my family lives in Korea"
  }
  p = {
    when: "When did I travelled this country? - Last Summer. While I stayed in Lisbon, I visited Porto during weekend .",
    where: "Where is best spot? - Winery places; I recommend Cálem.",
    who: "Who did I go with? - With three of friend whom I met in Lisbon"
  }
  l = {
    when: "When did I travelled this country? - Last Summer. I stayed here for 3 months.",
    where: "Where is best spot? - Bellem is best. Tarte is very famouse at this spot.",
    who: "Who did I go with? - It was study aborad so I met friends there"
  }
  b = {
    when: "When did I travelled this country? - 2017 Summer. I spent two days here.",
    where: "Where is best spot? -  Brussels' La Grand Place!",
    who: "Who did I go with? - Alone. It was when I toured Europe by myself. "
  }
  lon = {
    when: "When did I travelled this country? - 2017 Summer. I spent four days here.",
    where: "Where is best spot? - Warner Bros. Studio Tour London was great. Harry Potter!",
    who: "Who did I go with? - With my friend. "
  }
  r = {
    when: "When did I travelled this country? - Last Summer. I spent four days here.",
    where: "Where is best spot? - Trevi Fountain. Crowded by a lots of visitors; they may come for Roman Holiday movie I guess.",
    who: "Who did I go with? - With my family. "
  }
  n = {
    when: "When did I travelled this country? - 2017 Summer. I spent three days here.",
    where: "Where is best spot? - SOHO.",
    who: "Who did I go with? - With my Duke Friend. "
  }
  c = {
    when: "When did I travelled this country? - Last Summer. I spent two days here.",
    where: "Where is best spot? - Prague Castle was the best XD",
    who: "Who did I go with? - With my family. "
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  render() {
    return (
      <div>
      <div className = "items">
        <img src= {paris} alt="Paris"  onClick={() => this.setState({ open: true, name: "Paris", when: this.paris.when, who: this.paris.who, where: this.paris.where})} />
        <img src= {sf} alt="SF" onClick={() => this.setState({ open: true, name: "SanFrancisco", when: this.sf.when, who: this.sf.who, where: this.sf.where})} />
        <img src= {korea} alt="Korea" onClick={() => this.setState({ open: true, name: "Korea", when: this.korea.when, who: this.korea.who, where: this.korea.where })}/>
        <img src= {porto} alt="Porto, Portugal" onClick={() => this.setState({ open: true, name: "Porto, Portugal", when: this.p.when, who: this.p.who, where: this.p.where})}/>
        <img src= {lisbon} alt="Lisbon, Portugal" onClick={() => this.setState({ open: true, name: "Lisbon, Portugal", when: this.l.when, who: this.l.who, where: this.l.where })}/>
        <img src= {Belgium} alt="Belgium" onClick={() => this.setState({ open: true, name: "Belgium", when: this.b.when, who: this.b.who, where: this.b.where })} />
        <img src= {london} alt="London" onClick={() => this.setState({ open: true, name: "London", when: this.lon.when, who: this.lon.who, where: this.lon.where })}/>
        <img src= {rome} alt="Rome, Italy" onClick={() => this.setState({ open: true, name: "Rome, Italy", when: this.r.when, who: this.r.who, where: this.r.where })}/>
        <img src= {ny} alt="New York City" onClick={() => this.setState({ open: true, name: "New York City" , when: this.n.when, who: this.n.who, where: this.n.where })}/>
        <img src= {prague} alt="Prague, Czech" onClick={() => this.setState({ open: true, name: "Prague", when: this.c.when, who: this.c.who, where: this.c.where })}/>
      </div>

      <Modal open = {this.state.open} onClose={this.onCloseModal}>
        <div className="modalsize">
        <h1>
        {this.state.name}
        </h1>
        <hr></hr>
        <p>{this.state.when}</p>
        <p>{this.state.who}</p>
        <p>{this.state.where}</p>
        </div>
      </Modal>
      </div>
    )
  }
}
export default Item
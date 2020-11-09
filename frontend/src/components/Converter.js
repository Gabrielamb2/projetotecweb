import React from "react";
import axios from "axios";

export default class Converter extends React.Component {
  constructor() {
    super();
    this.state = {
      ingrediente : "",
      numero: "",
      med_antes : "",
      med_dps : ""
    };
  }

  componentDidMount = () => {
    axios.get("/converter").then(response => {
      this.setState({
        numero: (response.data.numero)
      });
    });
  };

  handleChange(changeObject){
    this.setState(changeObject)
  }


  
  render() {
    return (
      <div>
        <form>
          <input name="ingrediente"
                    id="ingrediente"
                    type="text"
                    className="form-control"
                    onChange={(e) => this.handleChange({ name: e.target.value })}/>
        </form>
      </div>
    );
  }
}
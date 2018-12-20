import React from "react";

class RandomXe extends React.Component {
  state = {
    loading: true,
    people: []
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=10";

    const response = await fetch(url);
    const data = await response.json();

    this.setState({ people: data.results, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    if (!this.state.people) {
      return <div>person was found </div>;
    }

    const xe = this.state.people.map(person => (
      <div className="container">
        <div className="row">
          <img className="media mt-2" src={person.picture.large} />
          <div className="col-sm">
            <h2 className="mt-4">
              {person.name.first}
              {person.name.last}
            </h2>
            <p>
              {person.location.city}, {person.location.state}
            </p>
          </div>
        </div>
      </div>
    ));

    return <div>{xe}</div>;
  }
}

export default RandomXe;

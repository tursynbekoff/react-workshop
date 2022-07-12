import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };
  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center">
        <img
          src={images[active]}
          alt="animal"
          className=" w-full sm:w-2/3 lg:w-4/12"
        />
        <div className="py-10 flex flex-row flex-wrap justify-center items-center">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              key={photo}
              src={photo}
              data-index={index}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              width="100"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;

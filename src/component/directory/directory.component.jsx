import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "Palace",
          imageUrl:
            "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2014%2F03%2Fpalace-skateboards-4-spring-releaser-4.jpg?q=75&w=800&cbr=1&fit=max",
          id: 1,
          linkUrl: "shop/palace",
        },
        {
          title: "Kith",
          imageUrl:
            "https://i.pinimg.com/originals/4d/43/fd/4d43fdd46f411d580e97f9e4d8de7025.jpg",
          id: 2,
          linkUrl: "shop/kith",
        },
        {
          title: "Fear Of God",
          imageUrl:
            "https://swankism.com/wp-content/uploads/2018/09/fear-of-good-sixth-collection-lookbook-jared-leto.jpg",
          id: 3,
          linkUrl: "shop/fearofgod",
        },
        {
          title: "off-white",
          imageUrl:
            "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2017%2F07%2Foff-white-air-jordan-1-release-date-1.jpg?q=90&w=1400&cbr=1&fit=max",
          size: "large",
          id: 4,
          linkUrl: "shop/off-white",
        },
        {
          title: "supreme",
          imageUrl:
            "https://images.squarespace-cdn.com/content/v1/596ce3c8cd0f68df1fd7598e/1559053906723-UQTR4R46LJBRN95L8DAS/ke17ZwdGBToddI8pDm48kI0CjPjBqaeMSzIotfx03A8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcyYk1EqFt_BDdeZmyVviauwbfMY-AdNKee0SuMBb9xBPT5M1s0TtygcgK0iQ_26Vy/Supreme%27s+Streetwear+Strategy",
          size: "large",
          id: 5,
          linkUrl: "shop/supreme",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;

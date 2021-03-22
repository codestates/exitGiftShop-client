function ArtistAddtionalInfo(props) {
  return (
    // Modal can be here with details in artistInfo and other props
    <div className="modal_dummy">
      Below Props can be used to handle actual model popup
      <h1> Hello, {props.artistInfo.title}</h1>
      <div>{props.artistInfo.id}</div>
      <div>{props.artistInfo.img}</div>
      <div>{props.artistInfo.content}</div>
      <div>showModel: {props.showModel ? "true" : "false"}</div>
      <button onClick={() => props.handleModalClose()}> close </button>
    </div>
  );
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          img: "../assets/images/artists-01.jpg",
          title: "Artist 1",
          content: "Lorem Ipsum",
          musica:
            "https://open.spotify.com/embed/artist/1wA3nwZy9EriceVVQlEmEx",
          genres: ["Punk ", "Rock"],
        },

        {
          id: 2,
          img: "../assets/images/artists-04.jpg",
          title: "Artist 2",
          content: "lorem ipsum",
          musica:
            "https://open.spotify.com/embed/artist/1wA3nwZy9EriceVVQlEmEx",
        },
      ],
      artistInfo: {},
      isShowModel: false,
    };
  }

  handleShow = (artist) => {
    this.setState({
      artistInfo: artist,
      isShowModel: true,
    });
  };

  handleOnhide = () => {
    this.setState({
      isShowModel: false,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="">
            {this.state.items.map((artist) => (
              <div className="card" key={artist.id}>
                <img className="card_image" src={artist.img} />
                <div className="card_body">
                  <button
                    onClick={() => {
                      this.handleShow(artist);
                    }}
                  >
                    {" "}
                    {artist.title}{" "}
                  </button>
                  <div className="card_text"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {this.state.isShowModel && (
          <ArtistAddtionalInfo
            artistInfo={this.state.artistInfo}
            showModel={this.state.isShowModel}
            handleModalClose={() => {
              this.handleOnhide();
            }}
          />
        )}
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.querySelector("#app"));

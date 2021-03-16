import React, { useState } from "react";
import HomePresenter from "./HomePresenter";

export const HomeContainer = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [upComing, setUpComing] = useState(null);
  const [popular, setPopular] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <HomePresenter
      nowPlaying={setNowPlaying}
      upComing={setUpComing}
      popular={setPopular}
      error={setError}
      loading={setLoading}
    />
  );
};

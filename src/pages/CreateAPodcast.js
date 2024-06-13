import React from "react";
import CreateAPodcast from "../components/StartAPodcast/CreateAPodcast";
import Header from "../components/common/Header";

function CreateAPodcastPage() {
  return (
    <div>
      <Header />
      <div className="input-wrapper">
        <h1>Create A Podcast</h1>
        <CreateAPodcast />
      </div>
    </div>
  );
}

export default CreateAPodcastPage;

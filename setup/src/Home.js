import React, { useState, useEffect } from "react";
import Form from "./SearchForm";
import Movies from "./Movies";
import Theme from "./Theme";
import TestComponent from "./TestComponent";

const Home = () => {
  return (
    <main className="container mx-auto">
      <Theme />
      <Form />
      <Movies />
    </main>
  );
};

export default Home;

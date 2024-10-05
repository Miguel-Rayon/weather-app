import React, { Fragment } from "react";
import Main from "@/layouts/Main";
import Container from "@/components/Container";
import { Weather } from "@/components/weather";

export default function Home() {
  return (
    <Main>
      <Container>
        <Fragment>
          <Weather />
        </Fragment>
      </Container>
    </Main>
  );
}

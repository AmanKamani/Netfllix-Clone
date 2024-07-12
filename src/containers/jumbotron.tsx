import React from "react";
import { Jumbotron } from "../components";
import jumbotronData from "../fixtures/jumbo.json";

export const JumbotronContainer = () => {
    return (<Jumbotron.Container>
      {jumbotronData.map(data => (
        <Jumbotron key={data.id} direction={data.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{data.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{data.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={data.image} alt={data.alt} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>);
}
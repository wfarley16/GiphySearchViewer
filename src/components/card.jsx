import React from "react";

import { Button, Card, Embed } from "semantic-ui-react";

export default ({ result, index, handleClick }) => {
  return (
    <>
    {result &&
      <Card className="gif-card">
        <Card.Header content={result.title} />
        <Card.Content>
          <Embed url={result.embed_url} active />
          <p>Date: {result.import_datetime.split(' ')[0]}</p>
          <Button.Group>
            <Button content="Next" onClick={handleClick} />
          </Button.Group>
        </Card.Content>
      </Card>
    }
    </>
  );
}

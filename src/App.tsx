import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Yoyo", "bo 6ee6", "5o5a"];

  const onSelectItem = (item: string) => {
    console.log(item);
  };

  const [showAlert, setShowALert] = useState(false);

  const onButtonClick = () => {
    console.log("Button Clicked!");
    setShowALert(true);
  };

  return (
    <div>
      {showAlert && (
        <Alert>
          <h3>Hello World!</h3>
        </Alert>
      )}
      <ListGroup items={items} heading="Friends" onSelectItem={onSelectItem} />
      <Button color="secondary" onButtonClick={onButtonClick}>
        Click me
      </Button>
    </div>
  );
}

export default App;

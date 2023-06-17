function ListGroup() {
  let items = ["Yoyo", "bo 6ee6", "Koka"];
  let selectedIndex = 0;

  const getMessage = () => {
    return items.length === 0 && <p>No items!</p>;
  };

  const handleClick = (item: String) => {
    console.log("Clicked", item);
  };

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group list-group-flush">
        {items.map((item, index) => (
          <>
            <li className="list-group-item disabled" aria-disabled="true">
              A disabled item
            </li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

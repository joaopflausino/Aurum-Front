import * as React from 'react';
import { ListGroup,ListGroupItem } from 'reactstrap';


    const HandleClick = () => {
        alert("✔️");
      };

export default function GutterlessList({objeto}) {


    console.log(objeto);
  return (
    <div>
      {objeto.map((objeto) => (
        <ListGroup>
          <ListGroupItem>
            <h3>
            {objeto.name}
            </h3>
            <button type="button" class="btn btn-outline-danger">
              Concluir Investimento
            </button>

          </ListGroupItem>
        </ListGroup>
      ))}
    </div>
  );
}
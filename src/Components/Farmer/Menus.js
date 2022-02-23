import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menus = () => {
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/addProduct" action>Add Product</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/editProduct" action>Edit Product</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/deleteProduct" action>Delete Product</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/viewProduct" action>View Product</Link>
        </ListGroup>
    )
}
export default Menus;
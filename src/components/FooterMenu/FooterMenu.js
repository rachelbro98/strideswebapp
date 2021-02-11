import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import "./FooterMenu.css";

class FooterMenu extends Component {
  render() {
    return (
      <div>
        <Nav className="justify-content-center">
          <Nav.Item>
            <i class="far fa-calendar-alt footer-icon"></i>
            <Nav.Link href="/">My Plans</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/" eventKey="link-1">
              <i class="fas fa-chart-line footer-icon"></i>
              Achievements
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link hreef="/" eventKey="link-2">
              <i class="fas fa-users footer-icon"></i>
              Community
            </Nav.Link>
          </Nav.Item>
          <Nav.Item></Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default FooterMenu;

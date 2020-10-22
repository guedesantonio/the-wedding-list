import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap';
import classnames from 'classnames';
import RecipesCarousel from "../carousel/Carousel.js"
import SearchList from '../searchList/SearchList.js';
import RecipeModal from '../modal/Modal.js';
import ProfileRecipeList from '../profileRecipeList/ProfileRecipeList.js';

const ProfileTab = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <Card style={{backgroundColor:"#3C5A98", color:"white"}}>
      <Nav tabs>
        <NavItem >
          <NavLink 
            style={{color:"white",fontWeight:"500",textShadow:" 0px 2px 2px #3C5A98 "}}
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            SEARCH
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={{color:"white",fontWeight:"500",textShadow:" 0px 2px 2px #3C5A98 "}}
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            MY RECIPES
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <RecipeModal/>
              <SearchList/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <ProfileRecipeList/>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </Card>
  );
}

export default ProfileTab;
import React, { useState , useEffect} from "react";
import { Spinner, Row, Col } from 'reactstrap';


const RecipeModalBody = ({recipeInfo}) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <>
    {loading === false ? (
    <div>
    <Row xs="1">
      <img  src={recipeInfo.image} className="recipeImage" alt="Pasta Vegetable Soup" title="Pasta Vegetable Soup" />
    </Row>
    <Row xs="1">
              <Col>Summary</Col>
            </Row>
    <Row xs="1">
      <div className="summary panel" style={{ backgroundColor: "rgba(128, 0, 128, 0.11)" }}>
      In a large sauce pan, combine 4 cups water, onion, carrot, celery, brown sugar, basil, marjoram, oregano, thyme, pepper, garlic, chicken broth, tomatoes, beans, and tomato paste then bring to a boil. Cover, reduce heat, and simmer 45 minutes. Add remaining 2 cups water; bring to a boil. Stir in macaroni, and cook an additional 8 minutes. Ladle into soup bowls; top with Parmesan cheese.
      </div>
    </Row>
            <Row xs="1">
              <Col>Ingredients</Col>
            </Row>
            <Row xs="1">
              <Col>Equipment</Col>
            </Row>
            <Row xs="1">
              <Col>Instructions</Col>
            </Row>
            <Row xs="1">
              <Col>
                <li>In a large sauce pan, combine 4 cups water, onion, carrot, celery, brown sugar, basil, marjoram, oregano, thyme, pepper, garlic, chicken broth, tomatoes, beans, and tomato paste then bring to a boil. Cover, reduce heat, and simmer 45 minutes. Add remaining 2 cups water; bring to a boil. Stir in macaroni, and cook an additional 8 minutes. Ladle into soup bowls; top with Parmesan cheese.</li>
              </Col>
            </Row>
    </div>
      ) : (
        <div className="center">
        <Spinner color="dark" />
        L O A D I N G
      </div>
      )}
      </>
  )
}

export default RecipeModalBody;
import './ExploreContainer.css';
import {museumData} from '../../public/museumData.js'

interface ContainerProps {
  name: string;
}

function ExploreContainer({ name }) {
  return (
    <div id="container">
      {name}
      {museumData}
    </div>
  );
}

export default ExploreContainer;

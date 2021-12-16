import PreTitle from "../sub_components/Pre-title";
import Heading from "../sub_components/Heading";
import Paragraf from "../sub_components/Paragraf";
import Image from "../sub_components/Image";

function MediumSquareCard(props) {

  return (
    
    <div className="MediumSquareCard">

      <Image src={props.url}></Image>
      <PreTitle>{props.preTitle}</PreTitle>
      <Heading>{props.title}</Heading>
      <Paragraf>{props.paragraf}</Paragraf>

    </div>
    
  )


};

export default MediumSquareCard;
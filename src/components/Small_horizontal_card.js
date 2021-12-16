import Heading from "../sub_components/Heading";
import Paragraf from "../sub_components/Paragraf";
import Image from "../sub_components/Image";

function SmallHorizontalCard(props) {

  return (
    <>
    <div className="Small-horizontal-card">

      <Image src={props.url}></Image>
      <Heading>{props.title}</Heading>
      <Paragraf>{props.paragraf}</Paragraf>

    </div>
    </>
  )


};

export default SmallHorizontalCard;
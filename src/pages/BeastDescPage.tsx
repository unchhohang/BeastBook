/**
 * Page of Beasts description
 */

import PantherImg from "@BeastBook/assets/images/pantherBig.png";
import BearImg from "@BeastBook/assets/images/bearBig.png";
import LilithImg from "@BeastBook/assets/images/lilith.png";
import DescBeast from "@BeastBook/components/common/BeastDesc/DescBeast";
import LayoutContainer from "@BeastBook/layout/LayoutContainer";
import MidImgDesc from "@BeastBook/components/common/BeastDesc/MidImgDesc";
import NextButton from "@BeastBook/components/common/Buttons/NextButton";

const BeastDescPage = () => {
  return (
    <LayoutContainer>
      {SCROLLBOOK.map((ele, i) => (
        <DescBeast
          key={ele.image}
          desc={ele.desc}
          imagePath={ele.image}
          index={i}
        />
      ))}
      <MidImgDesc
        imagePath={lilthDesc.image}
        descPart1={lilthDesc.descPart1}
        descPart2={lilthDesc.descPart2}
      />
      <div>
        <NextButton />
      </div>
    </LayoutContainer>
  );
};

const SCROLLBOOK = [
  {
    image: PantherImg,
    desc: ` 
        Dark is his day and color. Silent hunter of the night. 
        May seem terrifying but very silent and shy.
        Creature of magic. He hunts in the forest of night.
        Enjoys to bask on moon light. 
        Very difficult to get a glimpse of his dazzling dark sight.
        Many agree that he doesn't exist. But the Beast Book says.
        He is just too shy.

  `,
  },
  {
    image: BearImg,
    desc: ` 
        Long ago druids of the forest used to tame such beasts. But once it happened. 
        The longing of nature to be free was awakend among these beast.
        And one of it's kind. In a quest to be unshacked.
        Killed it's own master. The fellow druid.
        Alash! The blood of forest guardian druid is no simple.
        It gave the creature great strength and unquenchable rage.
        Beware, for this powerful beast has only rage in it's heart.
  `,
  },
];

const lilthDesc = {
  image: LilithImg,
  descPart1: ` 
            Children of the forest. Long ago when elder elves lost their battle against humanity.
            They withdraw to their roots. To the forest. In hopes that they would find shelter and
            protection by forest. However, humans were still terrified from the magic of elves. 
            Fearful in future. That elves would return back with vengence. They searched and massacre
            all the elder elves in the forest. The blood of all the elder elves spilled. Among the roots 
            of the forest trees. Feeling fullfilled humans went back with genocide in their hands.
  `,
  descPart2: ` 
        However, the compassion of the forest was such. From the blood of elder elves
        it grew offspring of the forest. Trees gave birth to these small and playful creature.
        Unlike their ancestor who wages wars. They spend most of their time. Playing with each other
        in the abundance of the forest. Some human have accounted that these creatures have helped 
        many lost wonderer in forest back to their way.
  `,
};

export default BeastDescPage;

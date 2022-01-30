import { ButtonGroup, IconButton, Center } from "@chakra-ui/react";
import {
  MdShuffle,
  MdSkipNext,
  MdSkipPrevious,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat,
} from "react-icons/md";

const ButtonGroups = ({
  playing,
  setPlayState,
  shuffle,
  repeat,
  onRepeat,
  onShuffle,
}) => {
  return (
    <Center>
      <ButtonGroup>
        <IconButton
          outlibe="none"
          variant="link"
          aria-label="shuffle"
          fontSize="24px"
          icon={<MdShuffle />}
          color={shuffle ? "white" : ""}
          onClick={onShuffle}
        />
        <IconButton
          outlibe="none"
          variant="link"
          aria-label="skip"
          fontSize="24px"
          icon={<MdSkipPrevious />}
        />
        {playing ? (
          <IconButton
            outlibe="none"
            variant="link"
            aria-label="pause"
            fontSize="24px"
            icon={<MdOutlinePauseCircleFilled />}
            onClick={() => setPlayState(false)}
          />
        ) : (
          <IconButton
            outlibe="none"
            variant="link"
            aria-label="play"
            fontSize="24px"
            icon={<MdOutlinePlayCircleFilled />}
            onClick={() => setPlayState(true)}
          />
        )}
        <IconButton
          outlibe="none"
          variant="link"
          aria-label="next"
          fontSize="24px"
          icon={<MdSkipNext />}
        />
        <IconButton
          outlibe="none"
          variant="link"
          aria-label="repeat"
          fontSize="24px"
          icon={<MdOutlineRepeat />}
          onClick={onRepeat}
          color={repeat ? "white" : "gray.600"}
        />
      </ButtonGroup>
    </Center>
  );
};
export default ButtonGroups;

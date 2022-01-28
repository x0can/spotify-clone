import {
  ButtonGroup,
  Box,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Center,
  Flex,
  Text,
} from "@chakra-ui/react";
import ReactHowler from "react-howler";
import { useEffect, useRef, useState } from "react";
import {
  MdShuffle,
  MdSkipNext,
  MdSkipPrevious,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat,
} from "react-icons/md";
import { useStoreActions } from "easy-peasy";

const Player = () => {
  return (
    <Box>
      <Box>{/* <ReactHowler/> */}</Box>
      <Center>
        <ButtonGroup>
          <IconButton
            outlibe="none"
            variant="link"
            aria-label="shuffle"
            fontSize="24px"
            icon={<MdShuffle />}
          />
          <IconButton
            outlibe="none"
            variant="link"
            aria-label="skip"
            fontSize="24px"
            icon={<MdSkipPrevious />}
          />
          <IconButton
            outlibe="none"
            variant="link"
            aria-label="play"
            fontSize="24px"
            icon={<MdOutlinePlayCircleFilled />}
          />
          <IconButton
            outlibe="none"
            variant="link"
            aria-label="pause"
            fontSize="24px"
            icon={<MdOutlinePauseCircleFilled />}
          />
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
          />
        </ButtonGroup>
      </Center>
      <Box color="gray.600">
        <Flex justify="center" align="center">
          <Box width="10%">
            <Text fontSize="xs">1:21</Text>
          </Box>
          <Box width="80%">
            <RangeSlider
              aria-label={["min", "max"]}
              step={0.1}
              min={0}
              max={321}
              id="player-range"
            >
              <RangeSliderTrack bg="gray.800">
                <RangeSliderFilledTrack bg="gray.600" />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
            </RangeSlider>
          </Box>
          <Box width="10%" textAlign="right">
            <Text fontSize="xs">321</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Player;

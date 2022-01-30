import {
  Box,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Flex,
  Text,
} from "@chakra-ui/react";
import ReactHowler from "react-howler";
import { useEffect, useRef, useState } from "react";
import ButtonGroups from "./buttonGroups";
import { useStoreActions } from "easy-peasy";

const Player = ({ songs, activeSong }) => {
  const [playing, setPlaying] = useState(true);
  const [index, setIndex] = useState(0);
  const [seek, setSeek] = useState(0.0);
  const [repeat, setRepeat] = useState(false);
  const [duration, setDuration] = useState(0.0);
  const [shuffle, setShuffle] = useState(false);

  const setPlayState = (value) => {
    setPlaying(value);
  };

  const onShuffle = () => {
    setShuffle((state) => !state);
  };
  const onRepeat = () => {
    setRepeat((state) => !state);
  };
  return (
    <Box>
      <Box>
        <ReactHowler playing={playing} src={activeSong?.url} />
      </Box>
      <ButtonGroups
        playing={playing}
        setPlayState={setPlayState}
        shuffle={shuffle}
        repeat={repeat}
        onRepeat={onRepeat}
        onShuffle={onShuffle}
      />
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

import styled from "styled-components";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TimeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  svg {
    font-size: 30px;
    margin-right: 15px;
  }
`;

const TimerStlye = styled.div`
  margin-top: 5px;
  font-size: 20px;
  display: flex;
  flex: column;
  align-items: center;
  justify-content: center;
  padding-botton: 7em;
  padding-top: 2em;
  width: 100%;
  height: 100%;
`;

const TimerChild = styled.section`
  text-align: center;
`;

const AuctionTime = () => {
  // TO_DO_LOGIC:
  // 정해진 시간에 경매가 종료된다,
  // 경매 참여 시, 추가 시간 = 추가 시간 + 30분
  // 정해진 시간 =  정해진 시간 + 추가 시간

  // const [hours, setHours] = useState(24);

  return (
    <>
      <TimeBox>
        <FontAwesomeIcon icon={faClock} />
        <TimerStlye>
          <TimerChild>
            <p>87</p>
            <p>
              <small>Days</small>
            </p>
          </TimerChild>
          <span>:</span>
          <TimerChild>
            <p>87</p>
            <p>
              <small>Hours</small>
            </p>
          </TimerChild>
          <span>:</span>
          <TimerChild>
            <p>87</p>
            <p>
              <small>Minutes</small>
            </p>
          </TimerChild>
          <span>:</span>
          <TimerChild>
            <p>87</p>
            <p>
              <small>seconds</small>
            </p>
          </TimerChild>
        </TimerStlye>
      </TimeBox>
    </>
  );
};

export default AuctionTime;

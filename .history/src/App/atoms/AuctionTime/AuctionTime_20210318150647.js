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

const TimeStlye = styled.div`
  margin-top: 5px;
  font-size: 20px;
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
        <TimeStlye>
          <section>
            <p>87</p>
            <p>
              <small>Days</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>87</p>
            <p>
              <small>Hours</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>87</p>
            <p>
              <small>Minutes</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>87</p>
            <p>
              <small>seconds</small>
            </p>
          </section>
        </TimeStlye>
      </TimeBox>
    </>
  );
};

export default AuctionTime;

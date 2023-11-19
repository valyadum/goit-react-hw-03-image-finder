import { ThreeDots } from "react-loader-spinner";
import { LoadStyle } from "./Loader.styled";

export default function Loader() {
    return (
      <LoadStyle>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          // wrapperStyle={{}}
          // wrapperClassName=""
          visible={true}
        />
      </LoadStyle>
    );
}

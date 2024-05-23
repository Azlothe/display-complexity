import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Tool } from "../../data/types/CanvasTypes";
import { IoIosSave } from "react-icons/io";
import UploadDialog from "../dialogs/upload/UploadDialog";

interface Props {
  updateTool: (tool: Tool) => void;
}

function VerticalToolbar({ updateTool }: Props) {
  const handleClick = (tool: Tool) => {
    updateTool(tool);
  };

  return (
    <>
      <Toolbar
        sx={{
          backgroundColor: "rgba(255, 184, 26, 0)",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "72px",
          height: "100vh",
          position: "fixed",
          top: "0px",
          left: "0px",
        }}
      >
        <IconButton
          aria-label="pan"
          onClick={() => handleClick("Pan")}
          sx={{
            backgroundColor: "white",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
            "&:hover": {
              backgroundColor: "#f0f0f0",
              transform: "scale(1.15)",
              transition: "transform 0.3s ease",
            },
            margin: "4px",
          }}
        >
          <PanIcon />
        </IconButton>

        <IconButton
          aria-label="pan"
          onClick={() => handleClick("Pan")}
          sx={{
            backgroundColor: "white",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
            "&:hover": {
              backgroundColor: "#f0f0f0",
              transform: "scale(1.15)",
              transition: "transform 0.3s ease",
            },
            margin: "4px",
          }}
        >
          <SnipIcon />
        </IconButton>

        <UploadDialog
          triggerContent={
            <IconButton
              aria-label="pan"
              onClick={() => handleClick("Pan")}
              sx={{
                backgroundColor: "white",
                border: "1px solid rgba(0, 0, 0, 0.2)",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                  transform: "scale(1.15)",
                  transition: "transform 0.3s ease",
                },
                margin: "4px",
              }}
            >
              <UploadIcon />
            </IconButton>
          }
        />

        <IconButton
          aria-label="pan"
          onClick={() => handleClick("Pan")}
          sx={{
            backgroundColor: "white",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
            "&:hover": {
              backgroundColor: "#f0f0f0",
              transform: "scale(1.15)",
              transition: "transform 0.3s ease",
            },
            margin: "4px",
          }}
        >
          <IoIosSave className="h-[32px] w-[32px] text-black" />
        </IconButton>
      </Toolbar>
    </>
  );
}

const length = 32;

const PanIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={length}
    height={length}
    color={"#121212"}
    fill={"none"}
    {...props}
  >
    <path
      d="M18.9154 11.6997L17.373 15.8314C16.6547 17.7556 16.2955 18.7177 15.709 19.377C14.812 20.3851 13.5203 20.9748 12.1549 20.9995C11.262 21.0156 10.2783 20.6665 8.31091 19.9683C7.27913 19.6022 6.76324 19.4191 6.32165 19.1455C5.64795 18.7281 5.09127 18.1534 4.70166 17.4731C4.44628 17.0272 4.28743 16.5137 3.96974 15.4867L2.56985 10.9613C2.35476 10.266 2.64855 9.51553 3.28412 9.13687C4.11475 8.64198 5.19966 8.96175 5.60953 9.82225L6.5443 11.7848L9.1763 4.73429C9.4501 4.00083 10.2819 3.62265 11.0342 3.88961C11.7865 4.15657 12.1743 4.96757 11.9005 5.70103M11.9005 5.70103L12.5616 3.93029C12.8354 3.19683 13.6672 2.81866 14.4194 3.08562C15.1717 3.35257 15.5596 4.16357 15.2858 4.89704L14.6248 6.66777M11.9005 5.70103L10.4132 9.68518M14.6248 6.66777C14.8986 5.93431 15.7304 5.55613 16.4826 5.82309C17.2349 6.09005 17.6228 6.90105 17.349 7.63451L16.688 9.40524M14.6248 6.66777L13.1374 10.6519M18.5859 12.5854L19.4122 10.372C19.686 9.63852 19.2981 8.82752 18.5458 8.56056C17.7936 8.2936 16.9618 8.67178 16.688 9.40524M16.688 9.40524L15.8617 11.6187"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.3307 14C21.877 15.6354 21.0574 17.4263 19.5 18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const SnipIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width={length}
    height={length}
    viewBox="0 0 200 200"
    {...props}
  >
    <g
      transform="translate(0,200) scale(0.1,-0.1)"
      fill="#000000"
      stroke="none"
    >
      <path
        d="M1201 1515 c-83 -85 -85 -90 -54 -127 13 -15 9 -21 -49 -63 -117 -87
-198 -119 -255 -100 -38 12 -62 -41 -240 -554 -105 -301 -107 -292 54 -237
288 100 593 211 636 233 53 26 64 42 48 71 -15 28 10 96 71 190 76 116 74 115
109 89 l29 -21 85 84 c47 47 85 89 85 95 0 14 -412 425 -426 425 -6 0 -48 -38
-93 -85z m126 -307 c62 -62 113 -116 113 -121 0 -4 -25 -43 -55 -86 -67 -95
-103 -171 -111 -233 l-6 -47 -82 -31 c-63 -25 -417 -151 -496 -178 -8 -2 52
63 134 146 143 144 150 150 182 145 71 -12 124 35 124 107 0 33 -6 48 -29 71
-71 71 -192 9 -178 -91 5 -37 3 -39 -145 -186 l-149 -149 65 185 c35 102 83
235 106 296 l41 112 46 5 c55 6 168 61 248 121 33 24 64 45 70 45 5 1 60 -50
122 -111z"
      />
      <path
        d="M362 1468 c-18 -18 -14 -53 8 -73 30 -27 70 -7 70 34 0 43 -50 67
-78 39z"
      />
      <path
        d="M452 1354 c-27 -19 -28 -48 -2 -74 24 -24 43 -25 64 -4 22 21 20 50
-4 74 -24 24 -29 24 -58 4z"
      />
      <path
        d="M471 1206 c-7 -8 -11 -30 -9 -48 3 -29 7 -33 35 -36 27 -3 35 1 45
22 24 53 -36 105 -71 62z"
      />
      <path
        d="M430 1060 c-26 -26 -25 -55 1 -73 28 -20 55 -11 70 24 10 25 9 32 -6
49 -23 25 -40 25 -65 0z"
      />
      <path
        d="M364 942 c-6 -4 -16 -17 -23 -29 -25 -48 34 -86 73 -47 41 40 -4 107
-50 76z"
      />
      <path
        d="M300 800 c-24 -24 -26 -53 -4 -74 35 -36 78 -9 72 45 -4 42 -40 57
-68 29z"
      />
      <path
        d="M312 658 c-21 -21 -14 -66 12 -83 34 -22 66 -5 66 34 0 46 -50 77
-78 49z"
      />
      <path
        d="M395 534 c-22 -23 -15 -56 17 -73 24 -14 28 -14 47 3 26 24 27 48 3
69 -23 21 -46 21 -67 1z"
      />
    </g>
  </svg>
);

const UploadIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={length}
    height={length}
    fill="#000000"
    {...props}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21.02 5H19V2.98c0-.54-.44-.98-.98-.98h-.03c-.55 0-.99.44-.99.98V5h-2.01c-.54 0-.98.44-.99.98v.03c0 .55.44.99.99.99H17v2.01c0 .54.44.99.99.98h.03c.54 0 .98-.44.98-.98V7h2.02c.54 0 .98-.44.98-.98v-.04c0-.54-.44-.98-.98-.98zM16 9.01V8h-1.01c-.53 0-1.03-.21-1.41-.58-.37-.38-.58-.88-.58-1.44 0-.36.1-.69.27-.98H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8.28c-.3.17-.64.28-1.02.28-1.09-.01-1.98-.9-1.98-1.99zM15.96 19H6c-.41 0-.65-.47-.4-.8l1.98-2.63c.21-.28.62-.26.82.02L10 18l2.61-3.48c.2-.26.59-.27.79-.01l2.95 3.68c.26.33.03.81-.39.81z" />
  </svg>
);

export default VerticalToolbar;

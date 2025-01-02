import { Background, Parallax } from "react-parallax";

const insideStyles = {
  // background: 'black',
  // opacity: '30%',
  // padding: '20px',
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

const Cover = ({ img, title, des }) => {
  return (
    <div>
      {/* <Hello name="Parallax" /> */}
      <Parallax
        className="object-contain text-white "
        bgImage={img}
        blur={{ min: -10, max: 10 }}
      >
        <div style={{ height: 600, padding: 20 }}>
          <div style={insideStyles}>
            <h2 className="text-5xl font-bold">{title}</h2>
            <p>{des}</p>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;

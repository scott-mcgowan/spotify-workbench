import mergeImages from "merge-images";
import canvas from "canvas";
const { Canvas, Image } = canvas;

const MergeTask = () => {
  mergeImages(
    ["./images/body.png", "./images/eyes.png", "./images/mouth.png"],
    {
      Canvas: Canvas,
      Image: Image,
    }
  ).then((b64) => console.log("done mergin'"));
};

export { MergeTask };

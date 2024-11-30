import { style, cssRule } from "typestyle";
import { Application, Graphics } from "pixi.js";
import { useEffect } from "react";

cssRule("html, body", {
  padding: 0,
  margin: 0,
  fontFamily: '"Montserrat", sans-serif',
  fontOpticalSizing: "auto",
  fontStyle: "normal",
  color: "white",
});

const createRect = (app: Application, initialAngle: number, color: string) => {
  const rect = new Graphics()
    .rect(0, 0, app.canvas.width * 3, app.canvas.height)
    .fill(color);

  rect.pivot.x = app.canvas.width / 2;
  rect.pivot.y = app.canvas.height / 2;
  rect.rotation = initialAngle;

  rect.x = app.canvas.width / 2;
  rect.y = app.canvas.height / 2;

  app.ticker.add(() => {
    rect.rotation += 0.003;
  });

  app.stage.addChild(rect);
};

const InitFractalCanvas = async () => {
  const app = new Application();

  // Initialize the application
  await app.init({ background: "#000000", resizeTo: window });

  createRect(app, 100, "#636363");
  createRect(app, 200, "#3b3b3b");
  createRect(app, 300, "#222222");
  createRect(app, 400, "#141414");
  createRect(app, 500, "#000000");

  document.body.appendChild(app.canvas);

  app.canvas.className = canvas;
};

export const App = () => {
  useEffect(() => {
    InitFractalCanvas();
  }, []);

  return (
    <div className={container}>
      <h1>Cube 4D</h1>
      <div className={description}>
        Cube 4D is a cutting-edge token that unlocks the mysteries of
        the fourth dimension
      </div>
      <div className={buttons}>
        <a
          className={button}
          href="https://explorer.solana.com/address/mntp2EHYbbFkMN5xWccSpUaSastFQEhirGXPkGLi2E8"
        >
          Solana Explorer
        </a>
        <a className={button} href="https://t.me/cube4dsolana">
          Telegram
        </a>
      </div>
    </div>
  );
};

const container = style({
  padding: 30,
});

const description = style({
  color: "grey",
  fontSize: 78,
});

const buttons = style({
  display: "flex",
  gap: 4,
});

const button = style({
  borderColor: "rgb(255, 255, 255, 1)",
  backgroundImage: "linear-gradient(90deg, #c766ef, #7928d2 51.04%, #2b0c52)",
  borderRadius: 9999,
  fontSize: "1rem",
  lineHeight: "1.5rem",
  padding: "0.5rem",
  color: "white",
  textDecoration: 'none',
  border: '1px solid',
});

const canvas = style({
  height: "100vh",
  width: "100vw",
  position: "fixed",
  zIndex: -10,
  top: 0,
});

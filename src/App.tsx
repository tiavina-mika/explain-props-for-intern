import clsx from "clsx";
import * as React from "react";
import { ReactNode } from "react";
import "./styles.css";

type BlockChildrenProps = { 
  children?: ReactNode; 
  isCenter?: boolean;
  title: string;
  description: string;
  className?: string;
};
const BlockChildren = ({
  className,
  children, 
  isCenter, 
  title, 
  description 
}: BlockChildrenProps) => {
  return (
    <div className={clsx('root', isCenter && 'center', className)}>
      <h3>{title}</h3>
      <div className="description">{description}</div>
      {children}
    </div>
  )
};

type BlockComponentProps = { text: string };
const BlockComponent = ({ text }: BlockComponentProps) => {
  return (
    <div>
      <h3>Titre</h3>
      <div>Some description</div>
      {text}
    </div>
  )
};


const description = "We’ve helped everyone from small startups to Fortune 100 companies build websites that raise perceptions, create trust and drive growth. From architecture to development, our team proactively uncovers the best way to share your brand and products with the world. In fact, Together is currently London’s top web design agency on .";
const App = () => {
  return (
    <div className="App">
      {/* --------------- Centered Block --------------- */}
        <BlockChildren 
          isCenter
          title="Centered Block."
          description={description}
        >
          <a href="/">Hello There I'm children</a>
        </BlockChildren>

      {/* --------------- Left align Block --------------- */}
        <BlockChildren 
          title="Left align Block."
          description={description}
        >
        </BlockChildren>

      {/* --------------- Block with footer. --------------- */}
        <BlockChildren 
          title="Block with footer."
          description={description}
        >
          <h1>Hello Footer</h1>
        </BlockChildren>

      {/* --------------- Custom style. --------------- */}
      <BlockChildren 
          title="Block with footer."
          description={description}
          className="custom"
        >
          <h1>Hello Footer</h1>
        </BlockChildren>

      {/* --------------- Normal props. --------------- */}
        <BlockComponent text="Hello There I'm a text" />
      </div>
  );
}

export default App;

import clsx from "clsx";
import * as React from "react";
import { ReactNode } from "react";
import "./styles.css";

type BlockChildrenProps = { 
  children?: ReactNode; 
  isCenter?: boolean;
  title: string;
  description: string;
};
const BlockChildren = ({ 
  children, 
  isCenter, 
  title, 
  description 
}: BlockChildrenProps) => {
  return (
    <div className={clsx('root', isCenter && 'center')}>
      <h3>{title}</h3>
      <div>{description}</div>
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
export default function App() {
  return (
    <div className="App">
        {/* <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2> */}
        <BlockChildren 
          isCenter
          title="Engaging websites."
          description={description}
        >
          <a href="/">Hello There I'm children</a>
        </BlockChildren>


        <BlockChildren 
          title="Engaging websites 2."
          description={description}
        >
        </BlockChildren>


        <BlockChildren 
          title="Engaging websites 2."
          description={description}
        >
          <h1>Hello Footer</h1>
        </BlockChildren>


        <BlockComponent text="Hello There I'm a text" />
      </div>
  );
}

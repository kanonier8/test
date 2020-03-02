import React from 'react';
import { Page } from './page';
import { Button } from './components/Button';
import { Product, ProductMobile } from './components/Product';
import { LogoWhite, LogoBlue } from "./components/Logo";
import {Progress} from "./components/Progress";
import {StartPage} from "./page/StartPage";

function App() {
  return (
    <div>
      <Page>
        <StartPage/>
      </Page>

        <Button isMargin isSuccess>Button 1</Button>
        <Button isMargin>Button 2</Button>
        <Button>Button 3</Button>

        <Product />
        <ProductMobile />
        <LogoBlue />
        <LogoWhite />

        <div>
          <Progress questions={[{}, {}, {}, {}, {}]}/>
        </div>

    </div>
  );
}

export default App;

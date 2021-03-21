import { Container, Players } from './styles';

import { Player } from '../../components/Player';
import { Me } from '../../components/Me';

export const Game = () => (
  <Container>
    <Players>
      <div className="fela">
        {[
          'Throyer',
          'Throyer',
          'Throyer',
          'Throyer',
          'Throyer',
          'Throyer',
          'Lucas',
          'christianmsousa',
          'thiagosanrocha',
        ].map(name => (
          <Player name={name} info="Mesma info pra todos esses putos" />
        ))}
      </div>
      <div>
        <Me name="Throyer" info="batata" />
      </div>
    </Players>
    <div>
      <header>
        <button type="button">Start</button>
        <button type="button">Stop</button>
        <button type="button">Share</button>
      </header>
      <main>
        <div>
          <span>0</span>
        </div>
        <div>
          <span>1/2</span>
        </div>
        <div>
          <span>1</span>
        </div>
        <div>
          <span>2</span>
        </div>
        <div>
          <span>3</span>
        </div>
        <div>
          <span>5</span>
        </div>
        <div>
          <span>8</span>
        </div>
        <div>
          <span>13</span>
        </div>
        <div>
          <span>20</span>
        </div>
        <div>
          <span>40</span>
        </div>
        <div>
          <span>?</span>
        </div>
        <div>
          <span>infinity</span>
        </div>
        <div>
          <span>Pause Coffe</span>
        </div>
      </main>
    </div>
  </Container>
);

import Intro from './components/Intro/Intro';
import Header from './components/Header/Header';
import Tabs from './components/Tabs/Tabs';
import Slider from './components/Slider/Slider';

import './App.scss';
/**
 *
 */
function App() {
  return (
    <div className="container">
      <Header />
      <section>
        <Intro />
      </section>
      <section className="is-full">
        <Slider />
      </section>
      <section>
        <Tabs />
      </section>
      <footer>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget finibus nisl. Nam
          mauris augue, facilisis eu faucibus id, suscipit nec sem. Sed dignissim malesuada massa.
          Suspendisse potenti. Sed vulputate ante in aliquam pharetra. Aliquam vitae neque eget
          metus convallis auctor. Donec congue congue nisi. Suspendisse potenti. Ut turpis dui,
          vestibulum at varius at, iaculis ac nunc. Donec non elementum libero. Vestibulum quis erat
          nisl. Vivamus id neque ut neque varius vehicula. Mauris eget risus vel ligula vehicula
          tempus. Nulla posuere ultricies justo, a tempus nibh maximus et. Aliquam convallis turpis
          eget dui accumsan faucibus. Fusce quis porta augue.
        </p>
        <p>
          Ut urna mi, egestas at sodales sed, bibendum non neque. Nullam porttitor purus sit amet mi
          sodales hendrerit vitae vel justo. Cras vitae est sed mauris fringilla vehicula. Praesent
          sollicitudin urna vitae euismod varius. Vestibulum gravida dapibus egestas. Quisque
          euismod pulvinar magna, id porta dui placerat et. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Phasellus vehicula magna ut leo
          pharetra dignissim non varius orci. Nulla id mollis ipsum, ut tempor nisl. Aenean eget
          velit et elit facilisis bibendum. Phasellus ac pharetra augue. Phasellus sed tellus quis
          libero facilisis finibus id ut magna. Quisque finibus ligula ipsum, sed dictum erat
          elementum sit amet.
        </p>
        <p>
          Pellentesque bibendum vel nibh vel varius. Fusce nec faucibus lorem. Vestibulum vel
          dapibus sem, quis vulputate est. Ut eros augue, pretium nec lobortis sit amet, varius
          aliquet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
          cubilia curae; Curabitur vitae diam iaculis, porta nibh sit amet, ultricies mauris.
          Pellentesque in justo molestie, imperdiet sem quis, placerat erat. Sed eu quam velit.
          Suspendisse potenti. Donec maximus facilisis enim, vulputate pulvinar magna imperdiet vel.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Suspendisse potenti. Vivamus pharetra urna quis pretium eleifend.
        </p>
        <p>
          Aenean ac dolor est. Sed a rutrum tellus. Mauris sollicitudin, enim at ornare gravida,
          augue ligula maximus odio, at cursus elit augue eget mauris. Phasellus gravida non nunc ac
          molestie. Vivamus at arcu est. Suspendisse convallis interdum tellus at aliquet. Mauris
          ultricies facilisis ipsum in bibendum. Integer pulvinar at dolor in condimentum. Donec
          placerat, lectus et eleifend ullamcorper, nisi erat gravida sem, non auctor elit ex sit
          amet lorem. Mauris ex urna, blandit vitae purus quis, elementum malesuada lectus. Praesent
          lobortis eros a interdum pharetra. Etiam et fringilla metus. Ut laoreet et elit vel
          placerat.
        </p>
        <p>
          Cras laoreet leo viverra tellus rutrum dictum. Vestibulum in purus vulputate dui
          consectetur tempor quis a tellus. Mauris rhoncus libero neque, sit amet iaculis elit
          lobortis et. Curabitur hendrerit, enim a porta euismod, sapien ante tempus massa, a
          ultrices lectus lorem ac quam. Aenean ac quam ut turpis faucibus sollicitudin. In eget mi
          feugiat, tempus ex nec, porta felis. Suspendisse sit amet nisi orci. Donec imperdiet
          sapien vitae lectus ultrices tincidunt vitae id eros. Morbi sagittis dignissim lacinia. Ut
          mauris neque, molestie quis vestibulum id, interdum luctus dui. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. In fringilla lectus
          arcu, a porttitor nisl scelerisque quis. Aenean eu urna ipsum.
        </p>
      </footer>
    </div>
  );
}

export default App;

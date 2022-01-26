import { Jumbotron } from '../components';
import jumboData from '../fixtures/jumbo.json';

export default function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>

          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt} />
            {/* <Jumbotron.Video src={item.video} alt={item.alt} /> */}
            <video
              autoPlay
              muted
              loop
              style={{
                width: '100%',
                height: '100%',
                maxWidth: '73%',
                maxHeight: '71%',
                position: 'absolute',
                top: '12%',
                left: ' 13%',
              }}
            >
              <source src={item.video} type="video/mp4" />
            </video>
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}

import Carousel from 'react-bootstrap/Carousel';
import '../views/styles.css';
import flood from '../images/flood.jpg';
import drought from '../images/drought.jpg';
import polarbears from '../images/polarbears.jpg';

/* Använer React bootstrap Carusel för att skapa ett klickbart bildspel:
https://react-bootstrap.github.io/components/carousel/ */

/*
UPPDATERAD:
- Bytt bilder
- Lagt till text
- Flyttat på navigationspilarna (carousel-control-next och carousel-control-previous)
- Ändrat form på indikationsknapparna (carousel-indicators)
- Ändrat CSS
*/

function NoTransitionExample() {
  return (
    <Carousel slide={false} variant="light">
      <Carousel.Item>
        <div
          style={{
            borderRadius: '30px',
            paddingBottom: '50px',
          }}
        >
          <img
            className="d-block w-100"
            src={flood}
            alt="Översvämning på en gata med människor och bilar"
            style={{
              width: '487px',
              height: '660px',
              borderRadius: '30px 30px 0px 0px',
            }}
          />
          <p
            className="font-link-p-ingress"
            style={{
              textAlign: 'center',
              marginTop: '30px',
              marginBottom: '40px',
            }}
          >
            Fler översvämningar
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            borderRadius: '30px',
            paddingBottom: '50px',
          }}
        >
          <img
            className="d-block w-100"
            src={drought}
            alt="Två människor som står vid en cykel med vattendunk och ett barn som går bredvid"
            style={{
              width: '487px',
              height: '660px',
              borderRadius: '30px 30px 0px 0px',
            }}
          />
          <p
            className="font-link-p-ingress"
            style={{
              textAlign: 'center',
              marginTop: '30px',
              marginBottom: '40px',
            }}
          >
            Människor får svårare att hitta vatten
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            borderRadius: '30px',
            paddingBottom: '50px',
          }}
        >
          <img
            className="d-block w-100"
            src={polarbears}
            alt="Två unga isbjörnar med vatten runt sig"
            style={{
              width: '487px',
              height: '660px',
              borderRadius: '30px 30px 0px 0px',
            }}
          />
          <p
            className="font-link-p-ingress"
            style={{
              textAlign: 'center',
              marginTop: '30px',
              marginBottom: '40px',
            }}
          >
            Vissa djurarter kommer att utrotas
          </p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default NoTransitionExample;

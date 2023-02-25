import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import paths from "../routes/paths";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
/* Bilder*/
/* import temperatur from '../images/Temperatur.png'; */
import maskot from '../images/Maskot-ljusare.png';
import bredbubbla from '../images/bredbubbla.png';
import litenpilv from '../images/liten-pil-v.png';
import litenpilh from '../images/liten-pil-h.png';
/* import mellanPil from '../images/mellan-pil.png'; */
import diagrampratbubbla from '../images/diagram-pratbubbla.png';
/* Komponenter*/
import ImgCarousel from '../components/ImgCarousel';
import ViewLink from '../components/ViewLink';
import { Chart } from '../components/chart/Chart';
import { QuizButton } from "../components/quizButton";
/* import { findByLabelText } from '@testing-library/react'; */

/* 
UPPDATERAD:
- CSS
- Layout
- Text
- Lagt till klickbar pratbubbla
- Större video
- Klickbar källänk med tooltip
*/

/* Installerat Font Awesome https://fontawesome.com/v5/docs/web/use-with/react#get-started */
/*External link-icon*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'




/* Använder Row, Col och Container för att fördela innehållet på sidan.
Använder style för att hårdkoda anpassningar för layoutstrukturen och utseende,
anpassande justeringar för placering och storlek, och utseeende som rundade 
hörn och färgval m.m.*/
export function TemperaturView() {

  /* https://react-bootstrap.github.io/components/overlays/ */

  /* Vid hover visas en liten ruta med text, används till länken för källa */
  const renderTooltip = (props) => (
    <Tooltip
      style={{ backgroundColor: 'white', }}
      id="button-tooltip" {...props}
    >
      Naturvårdsverket
    </Tooltip>
  );

  return (
    <div>
      {/* Container för innehåll */}
      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        {/* Vitt block */}
        <div
          style={{
            width: '1337px',
            marginTop: '54px',
            marginBottom: '54px',
            backgroundColor: 'white',
            borderRadius: '30px',
            borderTop: 'solid 30px #F76245',
            borderBottom: 'solid 30px #F76245', /* UPPDATERAD: rött på botten av sidan också */
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/* Block för innehåll*/}
          <div
            style={{
              width: '992px',
              marginTop: '35px',
              backgroundColor: 'white',
              borderRadius: '30px',
            }}
          >
            {/* Rubrik och ingress */}
            <Row>
              <h1 className="font-link-h1" style={{ textAlign: 'center' }}>
                Temperatur
              </h1>
              <p
                className="font-link-p-ingress"
                style={{ textAlign: 'center' }}
              >
                Här kommer du lära dig om att jordens temperatur ökar och varför
              </p>
            </Row>
            {/* Första textelementet med information */}
            <Col
              style={{
                width: '992px',
                height: '387px',
                backgroundColor: '#F76245',
                borderRadius: '30px',
                border: 'solid 1px black',
                marginTop: '40px',
                display: 'flex',
                justifyContent: 'center',
                boxShadow: '1px 3px 10px black',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  marginTop: '60px',
                }}
              >
                <img
                  src={maskot}
                  alt="Jordglob med ansikte, webbapplikationens maskot"
                  style={{
                    width: '150px',
                    height: '150px',
                    marginTop: '50px',
                    marginRight: '30px',
                    marginLeft: '30px',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    marginLeft: '15px',
                  }}
                > 
                  {/* Visar popup-ruta vid klick */}
                  <ViewLink
                    button=
                    {<div
                      style={{
                        marginLeft: '13px',
                        marginTop: '38px'
                      }}
                    >
                      Visste du detta?
                    </div>
                    }
                    /* Renderas ut i popup-rutan */
                    text="År 2020 var det varmaste året i Sverige.
                    SMHI som är Sveriges meteorologiska och hydrologiska institut
                    har gjort mätningar på Sveriges temperatur sedan 1860-talet."
                  />
                </div>
              </div>
              <img
                src={bredbubbla}
                alt="Pratbubbla"
                style={{
                  width: '689px',
                  height: '274px',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  marginTop: '75px',
                  marginLeft: '280px',
                  width: '550px'
                }}
              >
                <h2
                  className='font-link-h2'
                  style={{
                    display: 'flex',
                    justifyContent: 'left',
                  }}
                >DU KOMMER PÅVERKAS
                </h2>
                <p className='font-link-p'>
                  Klimatförändringarna gör att det blir varmare på jorden du bor på.
                  När det blir varmare kommer världen att förändras och därför också Sverige.
                  Det kommer regna mer på vintern, våren och hösten.
                  Och på sommaren kommer det bli varmare, med torka och vattenbrist.
                </p>
              </div>
              {/* Visar länken med källan */}
              <OverlayTrigger
                placement="right"
                delay={{ show: 150, hide: 400 }}
                overlay={renderTooltip}

              >
                <a
                  className='font-link-a'
                  href='https://www.naturvardsverket.se/amnesomraden/klimatforandringar/klimatet-forandras/'
                  title="Naturvårdsverket"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    height: '16px',
                    position: 'absolute',
                    marginTop: '290px',
                    marginLeft: '770px',
                  }}
                >
                  Källa
                  <span style={{ marginLeft: '5px' }}>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </span>
                </a>
              </OverlayTrigger>
            </Col>
            {/* Ny youtubevideo och större vy */}
            <Row
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '50px'
              }}
            >
              <h2
                className='font-link-h2'
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                TITTA PÅ VIDEON OCH LÄR DIG MER
              </h2>
              <iframe
                className="ratio ratio-16x9"
                src="https://www.youtube.com/embed/Q5AvhVURM6I"
                title="Anpassa för ett klimat i förändring - hur och varför?"
                type="Youtubevideo"
                allowFullScreen
                style={{
                  width: '100%',
                  height: '562px',
                  borderRadius: '30px',
                }}
              >
              </iframe>
            </Row>
            {/* Linjediagram */}
            <div
              style={{
                width: '992px',
                backgroundColor: '#F76245',
                borderRadius: '30px',
                border: 'solid 1px black',
                paddingTop: '57px',
                marginTop: '50px',
                display: 'flex',
                justifyContent: 'center',
                boxShadow: '1px 3px 10px black',
              }}
            >
              <div
                style={{
                  width: '896px',
                  backgroundColor: 'white',
                  borderRadius: '30px',
                  paddingTop: '36px',
                  marginBottom: '60px',
                }}
              >
                <Row>
                  <h2
                    className="font-link-h2"
                    style={{
                      textAlign: 'center',
                      marginBottom: '0',
                    }}
                  >
                    Jordens temperatur förändras
                  </h2>
                </Row>
                <Row
                  style={{
                    paddingLeft: '30px',
                    paddingRight: '30px',
                    marginTop: '34px',
                  }}
                >
                  <Col
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}>
                    <Chart />
                  </Col>
                </Row>
                <Row
                  style={{
                    paddingLeft: '48px',
                    paddingRight: '48px',
                    marginTop: '45px',
                    marginBottom: '45px',
                  }}
                >
                  <Col>
                    <p
                      className="font-link-p"
                      style={{
                        textAlign: 'left',
                        marginBottom: '0',
                      }}
                    >
                      Diagrammet ovan visar att jorden blir varmare mellan år 2007-2016.
                      På den vertikala linjen visas temperaturen och på den horisontella visas åren.
                    </p>
                  </Col>
                  {/* Maskot med pratbubbla */}
                  <Col style={{ marginLeft: '10px', }}>
                    <p
                      style={{
                        position: 'absolute',
                        marginTop: '28px',
                        marginLeft: '7px',
                        textAlign: 'center',
                        width: '166px',
                        fontFamily: 'Courier New',
                        fontWeight: 'bold',
                      }}
                    >
                      Vad var temperaturen när du föddes?
                    </p>
                    <img
                      src={diagrampratbubbla}
                      alt="Liten pratbubbla"
                    />
                    <img
                      src={maskot}
                      alt="Jordglob med ansikte, webbapplikationens maskot"
                      style={{
                        width: '130x',
                        height: '130px',
                        marginLeft: '20px',
                      }} />
                  </Col>
                </Row>
              </div>
            </div>
            {/* Bildgalleri */}
            <Row
              style={{
                marginTop: '50px',
              }}>
              <h2
                className='font-link-h2'
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                Vad kommer kunna hända i framtiden?
              </h2>
              <ImgCarousel />
            </Row>
            {/* Sista textelementet med information */}
            <Col
              style={{
                width: '992px',
                height: '387px',
                backgroundColor: '#F76245',
                borderRadius: '30px',
                border: 'solid 1px black',
                display: 'flex',
                justifyContent: 'center',
                boxShadow: '1px 3px 10px black',
                marginTop: '10px',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  marginTop: '60px',
                }}
              >
                <img
                  src={maskot}
                  alt="Jordglob med ansikte, webbapplikationens maskot"
                  style={{
                    width: '150px',
                    height: '150px',
                    marginTop: '50px',
                    marginRight: '30px',
                    marginLeft: '30px',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    marginLeft: '15px',
                  }}
                >
                  {/*Visar popup-ruta vid klick */}
                  <ViewLink
                    button=
                    {<div style={{ marginTop: '29px' }}>
                      Vill du engagera dig?
                    </div>}
                    /* Vad som ska visas i popup-rutan */
                    text=
                    {<div>
                      <p className='font-link-p'>
                        Här kan du engagera dig
                      </p>
                      <div>
                        <a
                          className='font-link-a'
                          href='https://fridaysforfuture.se/en/'
                          title="Fridays For Future"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Fridays For Future
                          <span style={{ marginLeft: '5px' }}>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                          </span>
                        </a>
                      </div>
                      <div>
                        <a
                          className='font-link-a'
                          href='https://hsr.se/'
                          title="Håll Sverige Rent"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Håll Sverige Rent
                          <span style={{ marginLeft: '5px' }}>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                          </span>
                        </a>
                      </div>
                      <div>
                        <a
                          className='font-link-a'
                          href='https://www.wwf.se/'
                          title="Världsnaturfonden WWF Sverige"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Världsnaturfonden WWF
                          <span style={{ marginLeft: '5px' }}>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                          </span>
                        </a>
                      </div>
                    </div>}
                  />
                </div>
              </div>
              <img
                src={bredbubbla}
                alt="Pratbubbla"
                style={{
                  width: '689px',
                  height: '274px',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  marginTop: '75px',
                  marginLeft: '280px',
                  width: '550px'
                }}
              >
                <h2
                  className='font-link-h2'
                  style={{
                    display: 'flex',
                    justifyContent: 'left',
                  }}
                >
                  Engagera dig för klimatet
                </h2>
                <p className='font-link-p'>
                  För att stoppa klimatförändringarna på jorden måste förändringar ske.
                  Det kan kännas svårt, speciellt för unga personer.
                  Alla måste inte göra allt, men alla kan göra något.
                  Du kan exempelvis gå med i grupper som kämpar för klimatet,
                  plocka skräp tillsammans och cykla mer istället för att åka bil.
                </p>
              </div>
              {/* Länk till källan */}
              <OverlayTrigger
                placement="right"
                delay={{ show: 150, hide: 400 }}
                overlay={renderTooltip}

              >
                <a
                  className='font-link-a'
                  href='https://www.naturvardsverket.se/amnesomraden/klimatforandringar/klimatet-forandras/'
                  title="Naturvårdsverket"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    height: '16px',
                    position: 'absolute',
                    marginTop: '290px',
                    marginLeft: '770px',
                  }}
                >
                  Källa
                  <span style={{ marginLeft: '5px' }}>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </span>
                </a>
              </OverlayTrigger>
            </Col>
            {/* Rad med maskot och pratbubblor*/}
            <Row style={{ marginTop: '46px' }}>
              <Col
                style={{
                  display: 'flex',
                  justifyContent: 'right',
                  paddingLeft: '150px',
                }}
              >
                <img
                  src={litenpilv}
                  alt="Liten pratbubbla innehållande text om att fortsätta lära sig om kategorierna"
                />
              </Col>
              <Col
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  paddingTop: '50px',
                }}
              >
                <img
                  src={maskot}
                  alt="Jordglob med ansikte, webbapplikationens maskot"
                  style={{
                    width: '100px',
                    height: '100px'
                  }}
                />
              </Col>
              <Col
                style={{
                  display: 'flex',
                  justifyContent: 'left',
                  paddingRight: '150px',
                }}
              >
                <img
                  src={litenpilh}
                  alt="Pratbubbla innehållande text om quizet"
                />
              </Col>
            </Row>
            {/* Quiz-knapp*/}
            <Row>
              <Col
                style={{
                  paddingTop: '57px',
                  paddingBottom: '48px',
                  // marginTop: '70px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <QuizButton path={paths.quizViewPath} />
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}
